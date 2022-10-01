const { readFileSync } = require('fs');
const { resolve } = require('path');

const parseXML = require('@rgrove/parse-xml');
const gulp = require('gulp');
const { optimize } = require('svgo');
const through2 = require('through2');

const { iconsSvgToAsnDir } = require('../../constant');
const { chalkSUCCESS } = require('../../utils/chalkTip');
const toCameCase = require('../../utils/toCameCase');
const svgOptions = require('../svgOptions');
const useTemplate = require('./useTemplate');

const asnTemplate = readFileSync(
  resolve(__dirname, '../template/icon-svg/asn.ejs'),
  'utf8'
);

function svgToAsn(dir, { theme }) {
  return function (done) {
    const res = gulp
      .src(dir)
      .pipe(
        through2.obj(function (file, encoding, next) {
          const svgString = file.contents.toString(encoding);
          // const result = optimize(svgString);
          const { data } = optimize(svgString, {
            plugins: svgOptions.plugins,
          });
          const iconname = toCameCase(
            `${file.path.match(/([^\\/]+)\.svg$/)[1]}-${theme}`
          );
          const parseXmlRes = parseXML(data).toJSON(); // https://github.com/rgrove/parse-xml/blob/main/API.md
          parseXmlRes.name = file.stem;
          parseXmlRes.theme = theme;
          const iconcontent = JSON.stringify(parseXmlRes);
          file.contents = Buffer.from(
            useTemplate(asnTemplate, {
              iconname,
              iconcontent,
            })
          );
          file.path = file.path.replace(
            /([^\\/]+)\.svg$$/,
            toCameCase(`${file.stem}-${theme}.js`)
          );
          next(null, file);
        })
      )
      .pipe(gulp.dest(iconsSvgToAsnDir));
    res.on('finish', function () {
      console.log(chalkSUCCESS(`${theme}图标编译成功！`));
      done();
    });
  };
}

module.exports = svgToAsn;
