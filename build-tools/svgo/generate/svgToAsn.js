import gulp from 'gulp';
import parseXML from '@rgrove/parse-xml';
import through2 from 'through2';
import useTemplate from './useTemplate';
import toCameCase from '../../utils/toCameCase';
import svgOptions from '../svgOptions';
import { _SUCCESS, emoji } from '../../utils/chalkTip';

const { optimize } = require('svgo');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const asnTemplate = readFileSync(
  resolve(__dirname, '../template/icon-svg/asn.ejs'),
  'utf8'
);
export default function svgToAsn(dir, { theme }) {
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
      .pipe(gulp.dest('../components/icons-svg/asn'));
    res.on('finish', function () {
      console.log(_SUCCESS(`${theme}图标编译成功！`), emoji.get('clap'));
      done();
    });
  };
}
