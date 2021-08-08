/**
 * gulpfile.ts需要安装ts-node进行解析,https://www.gulpjs.com.cn/docs/getting-started/javascript-and-gulpfiles/
 * gulpfile.ts文件有啥好处：1，支持ts类型检测；2，会读取tsconfig.json文件，可以添加一些有用的设置，如esModuleInterop:true，它可以esm和cjs混用。
 */
import { argv } from 'process';
import {
  generateIconSvgEntry,
  generateSvgToAsn,
  generateIconVueIcons,
  generateIconVueIconsIndex,
} from './svgo/generate';
import replaceLib from './replaceLib';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const header = require('gulp-header');
const babelConfig = require('./getBabelCommonConfig');
const tsProject = require('../tsconfig.json');
const { _SUCCESS, emoji } = require('./utils/chalkTip');

const tsDefaultReporter = ts.reporter.defaultReporter();

function cleanDir(dir) {
  return (done) => {
    const res = gulp
      .src(dir, { allowEmpty: true })
      .pipe(clean({ force: true }));
    res.on('finish', function () {
      console.log(_SUCCESS(`删除${dir}目录成功！`), emoji.get('clap'));
      done();
    });
  };
}

function compileIcon(entryDir, outputDir, modules) {
  let error;
  const tsResult = gulp.src(entryDir).pipe(
    ts(tsProject.compilerOptions, {
      error(e) {
        tsDefaultReporter.error(e);
        error = 1;
      },
      finish: tsDefaultReporter.finish,
    })
  );
  function check() {
    if (error && !argv['ignore-error']) {
      console.log('退出');
      process.exit(1);
    }
  }

  const babelConfig1 = babelConfig(modules);
  // modules为false即保留 ES 模块。即代表现在是打包es，需要将里面原本的lib路径替换为es
  if (modules === false) {
    babelConfig1.plugins.push(replaceLib);
  }
  // https://github.com/ivogabe/gulp-typescript
  const stream = tsResult.js.pipe(babel(babelConfig1));
  tsResult.dts.pipe(
    gulp.dest(modules === false ? `${outputDir}/es` : `${outputDir}/lib`)
  );
  tsResult.on('finish', check);
  tsResult.on('end', check);
  return stream.pipe(
    gulp.dest(modules === false ? `${outputDir}/es` : `${outputDir}/lib`)
  );
}

function compileIconSvg(entryDir, outputDir, modules) {
  return compileIcon(entryDir, outputDir, modules);
}

function compileIconVue(entryDir, outputDir, modules) {
  return compileIcon(entryDir, outputDir, modules);
}

const iconVueFlies = [
  '../components/icons-vue/**/*.js',
  '../components/icons-vue/**/*.jsx',
];
const iconSvgFlies = ['../components/icons-svg/**/*.js'];

// 1,将icons-svg里的svg文件解析为Abstract Node，生成icons-svg的asn
gulp.task(
  'icons-svg-asn',
  gulp.parallel(
    generateSvgToAsn('../components/icons-svg/svg/filled/*.svg', {
      theme: 'filled', // 实底
    }),
    generateSvgToAsn('../components/icons-svg/svg/outlined/*.svg', {
      theme: 'outlined', // 线框
    }),
    generateSvgToAsn('../components/icons-svg/svg/twotone/*.svg', {
      theme: 'twoTone', // two-tone双色
    })
  )
);

// 2,根据icons-svg里的asn，生成icons-svg的入口文件
gulp.task('icons-svg-entry', () =>
  gulp
    .src('../components/icons-svg/asn/**/*.js')
    .pipe(generateIconSvgEntry())
    .pipe(concat('index.js'))
    .pipe(
      header(
        '// 这个文件是由build-tools/svgo/template/icon-svg/entry.ejs自动生成的，请勿手动修改！\n'
      )
    )
    .pipe(gulp.dest('../components/icons-svg'))
);

// 3,根据icons-svg里的asn，生成icons-vue的icons，以及生成icons的index.js
gulp.task(
  'icons-vue-icons',
  gulp.series(
    function task1() {
      return gulp
        .src('../components/icons-svg/asn/*.js')
        .pipe(generateIconVueIcons())
        .pipe(gulp.dest('../components/icons-vue/icons'));
    },
    function task2(done) {
      generateIconVueIconsIndex(done);
    }
  )
);

// npm run compile compile-icons-svg
gulp.task(
  'compile-icons-svg',
  gulp.series(
    cleanDir('../@billd-ui/icons-svg'),
    gulp.parallel(
      function copy(done) {
        const assetsStream = gulp
          .src(
            [
              `../components/icons-svg/package.json`,
              `../components/icons-svg/README.md`,
            ],
            { allowEmpty: true }
          )
          .pipe(gulp.dest('../@billd-ui/icons-svg'));
        assetsStream.on('finish', () => {
          console.log(
            _SUCCESS('复制package.json和README.md成功！'),
            emoji.get('clap')
          );
          done();
        });
      },
      function compileIconSvgEs(done) {
        compileIconSvg(iconSvgFlies, '../@billd-ui/icons-svg', false).on(
          'finish',
          function () {
            console.log(
              _SUCCESS('编译icons-svg-es组件成功！'),
              emoji.get('tada')
            );
            done();
          }
        );
      },
      function compileIconSvgLib(done) {
        compileIconSvg(iconSvgFlies, '../@billd-ui/icons-svg', undefined).on(
          'finish',
          function () {
            console.log(
              _SUCCESS('编译icons-svg-lib组件成功！'),
              emoji.get('tada')
            );
            done();
          }
        );
      }
    )
  )
);

// npm run compile compile-icons-vue
gulp.task(
  'compile-icons-vue',
  gulp.series(
    cleanDir('../@billd-ui/icons-vue'),
    gulp.parallel(
      function copyIconsVueAssets(done) {
        const assetsStream = gulp
          .src(
            [
              `../components/icons-vue/package.json`,
              `../components/icons-vue/README.md`,
            ],
            { allowEmpty: true }
          )
          .pipe(gulp.dest('../@billd-ui/icons-vue'));
        assetsStream.on('finish', () => {
          console.log(
            _SUCCESS('复制package.json和README.md成功！'),
            emoji.get('clap')
          );
          done();
        });
      },
      function compileIconVueEs(done) {
        compileIconVue(iconVueFlies, '../@billd-ui/icons-vue', false).on(
          'finish',
          function () {
            console.log(
              _SUCCESS('编译icons-vue-es组件成功！'),
              emoji.get('tada')
            );
            done();
          }
        );
      },
      function compileIconVueLib(done) {
        compileIconVue(iconVueFlies, '../@billd-ui/icons-vue', undefined).on(
          'finish',
          function () {
            console.log(
              _SUCCESS('编译icons-vue-lib组件成功！'),
              emoji.get('tada')
            );
            done();
          }
        );
      }
    )
  )
);
