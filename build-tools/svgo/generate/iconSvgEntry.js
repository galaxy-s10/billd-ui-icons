const { readFileSync } = require('fs');
const { resolve } = require('path');

const through = require('through2');

const { chalkSUCCESS } = require('../../utils/chalkTip');
const toCameCase = require('../../utils/toCameCase');
const useTemplate = require('./useTemplate');

const entryTemplate = readFileSync(
  resolve(__dirname, '../template/icon-svg/entry.ejs'),
  'utf8'
);
function generateIconSvgEntry() {
  const res = through.obj(function (file, encoding, next) {
    const path = toCameCase(file.stem);
    const compileTemplateRes = useTemplate(entryTemplate, {
      iconname: path,
      path: `./asn/${path}`,
    });
    file.contents = Buffer.from(compileTemplateRes);
    next(null, file);
  });
  res.on('finish', function () {
    console.log(chalkSUCCESS('生成icon-svg入口文件成功！'));
  });
  return res;
}

module.exports = generateIconSvgEntry;
