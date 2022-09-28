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
import { iconsSvgDir, iconsVueDir } from './constant';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const header = require('gulp-header');
const babelConfig = require('./getBabelCommonConfig');
const tsProject = require('../tsconfig.json');
const { chalkSUCCESS } = require('./utils/chalkTip');

const tsDefaultReporter = ts.reporter.defaultReporter();

// 删除目录
function cleanDir(dir) {
  return (done) => {
    const res = gulp
      .src(dir, { allowEmpty: true })
      .pipe(clean({ force: true }));
    res.on('finish', function () {
      console.log(chalkSUCCESS(`删除${dir}目录成功！`));
      done();
    });
  };
}

// 复制资源
function copyAssets(name, done) {
  gulp
    .src(
      [
        `../packages/${name}/package.json`,
        `../packages/${name}/README.md`,
        `../LICENSE`,
      ],
      { allowEmpty: true }
    )
    .pipe(gulp.dest(`../packages/${name}/dist/`))
    .on('finish', () => {
      console.log(chalkSUCCESS('复制package.json和README.md成功！'));
      done();
    });
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
  '../packages/icons-vue/**/*.js',
  '../packages/icons-vue/**/*.jsx',
];
const iconSvgFlies = ['../packages/icons-svg/**/*.js'];

// 1,将icons-svg里的svg文件解析为Abstract Node，生成icons-svg的asn
gulp.task(
  'icons-svg-asn',
  gulp.parallel(
    generateSvgToAsn('../packages/icons-svg/svg/filled/*.svg', {
      theme: 'filled', // 实底
    }),
    generateSvgToAsn('../packages/icons-svg/svg/outlined/*.svg', {
      theme: 'outlined', // 线框
    }),
    generateSvgToAsn('../packages/icons-svg/svg/twotone/*.svg', {
      theme: 'twoTone', // two-tone双色
    })
  )
);

// 2,根据icons-svg里的asn，生成icons-svg的入口文件
gulp.task('icons-svg-entry', () =>
  gulp
    .src('../packages/icons-svg/asn/**/*.js')
    .pipe(generateIconSvgEntry())
    .pipe(concat('index.js'))
    .pipe(
      header(
        '// 这个文件是由build-tools/svgo/template/icon-svg/entry.ejs自动生成的，请勿手动修改！\n'
      )
    )
    .pipe(gulp.dest('../packages/icons-svg'))
);

// 3,根据icons-svg里的asn，生成icons-vue的icons，以及生成icons的index.js
gulp.task(
  'icons-vue-icons',
  gulp.series(
    function task1() {
      return gulp
        .src('../packages/icons-svg/asn/*.js')
        .pipe(generateIconVueIcons())
        .pipe(gulp.dest('../packages/icons-vue/icons'));
    },
    function task2(done) {
      generateIconVueIconsIndex(done);
    }
  )
);

// npm run compile svg
gulp.task(
  'svg',
  gulp.series(
    cleanDir(iconsSvgDir),
    gulp.parallel(
      function copy(done) {
        copyAssets('icons-svg', done);
      },
      function compileIconSvgEs(done) {
        compileIconSvg(iconSvgFlies, iconsSvgDir, false).on(
          'finish',
          function () {
            console.log(chalkSUCCESS('编译icons-svg的es版本成功！'));
            done();
          }
        );
      },
      function compileIconSvgLib(done) {
        compileIconSvg(iconSvgFlies, iconsSvgDir, undefined).on(
          'finish',
          function () {
            console.log(chalkSUCCESS('编译icons-svg的lib版本成功！'));
            done();
          }
        );
      }
    )
  )
);

// npm run compile vue
gulp.task(
  'vue',
  gulp.series(
    cleanDir(iconsVueDir),
    gulp.parallel(
      function copy(done) {
        copyAssets('icons-vue', done);
      },
      function compileIconVueEs(done) {
        compileIconVue(iconVueFlies, iconsVueDir, false).on(
          'finish',
          function () {
            console.log(chalkSUCCESS('编译icons-vue的es版本成功！'));
            done();
          }
        );
      },
      function compileIconVueLib(done) {
        compileIconVue(iconVueFlies, iconsVueDir, undefined).on(
          'finish',
          function () {
            console.log(chalkSUCCESS('编译icons-vue的lib版本成功！'));
            done();
          }
        );
      }
    )
  )
);
