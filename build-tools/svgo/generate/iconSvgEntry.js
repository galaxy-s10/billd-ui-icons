import through from 'through2';
import useTemplate from './useTemplate';
import { chalkSUCCESS, emoji } from '../../utils/chalkTip';
import toCameCase from '../../utils/toCameCase';

const { readFileSync } = require('fs');
const { resolve } = require('path');

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
    console.log(chalkSUCCESS('生成icon-svg入口文件成功！'), emoji.get('clap'));
  });
  return res;
}

export default generateIconSvgEntry;
