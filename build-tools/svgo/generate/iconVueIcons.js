import through2 from 'through2';
import useTemplate from './useTemplate';
import { _SUCCESS, emoji } from '../../utils/chalkTip';

const { readFileSync } = require('fs');
const { resolve } = require('path');

const iconVueTemplate = readFileSync(
  resolve(__dirname, '../template/icon-vue/icon-vue.ejs'),
  'utf8'
);

export default function generateIconVue() {
  const res = through2.obj(function (file, encoding, next) {
    // const iconname = `${file.path.match(/([^\\/]+)\.js$/)[1]}Icon`;
    const iconname = file.stem;
    file.contents = Buffer.from(useTemplate(iconVueTemplate, { iconname }));
    file.path = file.path.replace(/\.js$/, '.jsx');
    next(null, file);
  });
  res.on('finish', function () {
    console.log(_SUCCESS(`编译icon-vue组件成功！`), emoji.get('clap'));
  });
  return res;
}
