const { writeFile } = require('fs');

const pkg = require('../../../package.json');
const { iconsVueEntryPath, iconsVueEntryName } = require('../../constant');
const { chalkSUCCESS } = require('../../utils/chalkTip');

function generateIconVueEntry(done) {
  const str = `// 这个文件是由build-tools/svgo/generate/iconVueEntry.js自动生成的，请勿手动修改！\n\nexport * from './icons';\nexport const version = '${pkg.version}';\n`;
  writeFile(`${iconsVueEntryPath}/${iconsVueEntryName}`, str, () => {
    console.log(chalkSUCCESS('生成icons-vue/index.js成功！'));
    done();
  });
}

module.exports = generateIconVueEntry;
