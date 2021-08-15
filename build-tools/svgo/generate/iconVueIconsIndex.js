import { _SUCCESS, emoji } from '../../utils/chalkTip';

const { writeFile, readdir } = require('fs');
const { resolve } = require('path');

export default function generateIconVueIconsIndex(done) {
  /**
   * 读取../../../components/icons-svg/asn目录，根据这个目录生成icons-vue/icons的index.js
   * 为什么不读取../../../components/icons-vue/icons,更加icons-vue/icons的文件生成index.js呢，其实最好就是这样，
   * 但是要确保icons-vue/icons目录的文件要和/icons-svg/asn一一对应，如果是执行了icons-vue-icons任务后，icons-vue/icons目录就会多一个index.js
   * 下次再执行icons-vue-icons任务的时候，读取的icons-vue/icons目录就会比icons-svg/asn目录多一个index.js文件，那么最终生成的index.js文件就会多导入
   * 一个index.js，这样是有问题的，所以如果是根据icons-vue/icons目录生成index.js，就要在icons-vue-icons任务的时候，先删除icons-vue/icons，然后icons-vue-icons
   * 任务会生成新的icons-vue/icons目录，然后再根据这个新的icons-vue/icons目录生成index.js，这样就没问题。
   * 由于这里没有在icons-vue-icons任务的时候删除旧的icons-vue/icons目录，因此就不根据icons-vue/icons目录生成index.js，而是根据icons-svg/asn目录生成index.js
   */
  readdir(
    resolve(__dirname, '../../../components/icons-svg/asn'),
    (err, filesArr) => {
      const indexText = filesArr
        .sort()
        .map((item) => {
          const name = item.split('.')[0];
          return `export { default as ${name} } from './${name}';`;
        })
        .join('\n');
      writeFile(
        resolve(__dirname, '../../../components/icons-vue/icons/index.js'),
        indexText,
        () => {
          console.log(
            _SUCCESS('生成icons-vue/icons/index.js成功！'),
            emoji.get('clap')
          );
          done();
        }
      );
    }
  );
}
