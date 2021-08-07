/**
 * gulpfile.ts需要安装ts-node进行解析,https://www.gulpjs.com.cn/docs/getting-started/javascript-and-gulpfiles/
 * gulpfile.ts文件有啥好处：1，支持ts类型检测；2，会读取tsconfig.json文件，可以添加一些有用的设置，如esModuleInterop:true，它可以esm和cjs混用。
 */
import { argv } from 'process';

import through2, { obj } from 'through2';

import {
  generateIconSvgEntry,
  generateSvgToAsn,
  generateIconVueIcons,
  generateIconVueIconsIndex,
} from './svgo/generate';

import replaceLib from './replaceLib';

console.log('097');
console.log(through2);
// const through2 = require('through2');
const { writeFile, readdir } = require('fs');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');

const header = require('gulp-header'); // 报错：Cannot use import statement outside a module
// import { readFileSync } from 'fs';//报错：Cannot use import statement outside a module
const babelConfig = require('./getBabelCommonConfig');
const tsProject = require('../tsconfig.json');

const tsDefaultReporter = ts.reporter.defaultReporter();
const { _SUCCESS, emoji } = require('./utils/chalkTip');
const transformLess = require('./utils/transformLess.js');

const componentsDir = '../components';

// 将icons-svg里的svg文件解析为Abstract Node，生成icons-svg的asn
gulp.task(
  'icons-svg-asn',
  gulp.parallel(
    generateSvgToAsn('../components/icons-svg/svg/filled/*.svg', {
      theme: 'Filled', // 实底
    }),
    generateSvgToAsn('../components/icons-svg/svg/outlined/*.svg', {
      theme: 'Outlined', // 线框
    }),
    generateSvgToAsn('../components/icons-svg/svg/twotone/*.svg', {
      theme: 'TwoTone', // two-tone双色
    })
  )
);

// 根据icons-svg里的asn，生成icons-svg的入口文件
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

// 根据icons-svg里的asn，生成icons-vue的icons
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

const iconVueFlies = [
  '../components/icons-vue/**/*.js',
  '../components/icons-vue/**/*.jsx',
];
const iconSvgFlies = ['../components/icons-svg/**/*.js'];

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
  const stream = tsResult.js.pipe(babel(babelConfig1));
  // tsResult.dts.pipe(
  //   gulp.dest(
  //     modules === false
  //       ? '../components/icons-vue/es'
  //       : '../components/icons-vue/lib'
  //   )
  // );
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

gulp.task(
  'compile-icons-vue',
  gulp.series(
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
            emoji.get('heavy_check_mark')
          );
          done();
        });
      },
      function compileIconVueEs(done) {
        compileIconVue(iconVueFlies, '../@billd-ui/icons-vue', false).on(
          'finish',
          function () {
            done();
          }
        );
      },
      function compileIconVueLib(done) {
        compileIconVue(iconVueFlies, '../@billd-ui/icons-vue', undefined).on(
          'finish',
          function () {
            done();
          }
        );
      }
    )
  )
);
gulp.task(
  'compile-icons-svg',
  gulp.parallel(
    function copyIconsSvgAssets(done) {
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
          emoji.get('heavy_check_mark')
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
            emoji.get('heavy_check_mark')
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
            emoji.get('heavy_check_mark')
          );
          done();
        }
      );
    }
  )
);

gulp.task(
  'cleanall',
  () =>
    // gulp-clean：确保返回流，以便gulp知道clean任务是异步的
    gulp
      .src(['../lib', '../es', '../dist'], {
        allowEmpty: true,
      })
      .pipe(clean({ force: true })) // 不添加force:true属性不能删除上层目录，因此加上。
  // cb(); // 使用cb不管用，因为gulp-clean是异步的。
);

gulp.task(
  'clean-all',
  gulp.series('cleanall', (done) => {
    console.log(
      _SUCCESS('清除旧构建文件成功！'),
      emoji.get('heavy_check_mark')
    );
    done();
  })
);

gulp.task(
  'default',
  gulp.series(
    'clean-all',
    // gulp.parallel('copy-assets', 'compile-es')
    // gulp.parallel('copy-assets', 'compile-es', 'compile-lib')
    gulp.parallel('compile-es', 'compile-lib'),
    // "concat-css",
    function allTasksDone(done) {
      console.log(
        _SUCCESS('所有任务执行完成！'),
        emoji.get('white_check_mark')
      );
      done();
    }
  )
);
