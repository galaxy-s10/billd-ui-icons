const { readFileSync } = require('fs');
const { resolve } = require('path');

const through2 = require('through2');

const { chalkSUCCESS } = require('../../utils/chalkTip');
const useTemplate = require('./useTemplate');

const iconVueTemplate = readFileSync(
  resolve(__dirname, '../template/icon-vue/icon-vue.ejs'),
  'utf8'
);

function generateIconVueIcons() {
  const res = through2.obj(function (file, encoding, next) {
    // const iconname = `${file.path.match(/([^\\/]+)\.js$/)[1]}Icon`;
    const iconname = file.stem;
    file.contents = Buffer.from(useTemplate(iconVueTemplate, { iconname }));
    file.path = file.path.replace(/\.js$/, '.jsx');
    next(null, file);
  });
  res.on('finish', function () {
    console.log(chalkSUCCESS(`编译icon-vue组件成功！`));
  });
  return res;
}
module.exports = generateIconVueIcons;
