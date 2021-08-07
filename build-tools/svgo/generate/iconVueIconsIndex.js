import { _SUCCESS, emoji } from '../../utils/chalkTip';

const { writeFile, readdir } = require('fs');
const { resolve } = require('path');

export default function generateIconVueIconsIndex(done) {
  readdir(
    resolve(__dirname, '../../../components/icons-vue/icons'),
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
