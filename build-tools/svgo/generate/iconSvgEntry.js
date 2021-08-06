import through from 'through2';
import useTemplate from './useTemplate';
import { _SUCCESS, emoji } from '../../utils/chalkTip';

const { readFileSync } = require('fs');
const { resolve } = require('path');

const entryTemplate = readFileSync(
  resolve(__dirname, '../template/icon-svg/entry.ejs'),
  'utf8'
);
function generateIconSvgEntry() {
  const res = through.obj(function (file, encoding, next) {
    const compileTemplateRes = useTemplate(entryTemplate, {
      iconname: file.stem,
      path: `./asn/${file.stem}`,
    });
    file.contents = Buffer.from(compileTemplateRes);
    next(null, file);
  });
  res.on('finish', function () {
    console.log(_SUCCESS('生成icon-svg入口文件成功！'), emoji.get('tada'));
  });
  return res;
}

export default generateIconSvgEntry;
