/**
 * gulpfile.ts需要安装ts-node进行解析,https://www.gulpjs.com.cn/docs/getting-started/javascript-and-gulpfiles/
 * gulpfile.ts文件有啥好处：1，支持ts类型检测；2，会读取tsconfig.json文件，可以添加一些有用的设置，如esModuleInterop:true，它可以esm和cjs混用。
 */

const { argv, chdir } = require('process');

const gulp = require('gulp');
const { series, parallel } = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const header = require('gulp-header');
const ts = require('gulp-typescript');
const through = require('through2');
const webpack = require('webpack');

const pkg = require('../package.json');
const tsProject = require('../tsconfig.json');
const {
  iconsSvgDistDir,
  iconsSvgEntryPath,
  iconsSvgEntryName,
  iconsVueDistDir,
  iconsSvgToAsnDir,
  iconsVueIconsEntryPath,
  iconsVueEntryName,
  iconsVueEntryPath,
  porjectRootDir,
} = require('./constant');
const babelConfig = require('./getBabelCommonConfig');
const replaceLib = require('./replaceLib');
const {
  generateIconSvgEntry,
  generateSvgToAsn,
  generateIconVueIcons,
  generateIconsVueEntry,
} = require('./svgo/generate');
const generateIconVueEntry = require('./svgo/generate/iconVueEntry');
const { chalkSUCCESS } = require('./utils/chalkTip');
const webpackConfig = require('./webpack/webpack.common');

const tsDefaultReporter = ts.reporter.defaultReporter();

const iconVueFlies = [
  '../packages/icons-vue/**/*.js',
  '../packages/icons-vue/**/*.jsx',
];
const iconSvgFlies = ['../packages/icons-svg/**/*.js'];

// 删除目录/文件
function cleanDirOrFile(dir) {
  return new Promise((resolve) => {
    const res = gulp
      .src(dir, { allowEmpty: true })
      .pipe(clean({ force: true }));
    res.on('finish', function () {
      console.log(chalkSUCCESS(`删除${dir}目录成功！`));
      resolve(1);
    });
  });
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

function changeWebpackConfig({
  productionConfig,
  productionMinConfig,
  entry = '',
  outputPath = '',
  filename = '',
  libraryName = '',
}) {
  productionMinConfig.entry = entry;
  productionMinConfig.output.path = outputPath;
  productionMinConfig.output.filename = `${filename}.min.js`;
  productionMinConfig.output.library.name = libraryName;
  productionConfig.entry = entry;
  productionConfig.output.path = outputPath;
  productionConfig.output.filename = `${filename}.js`;
  productionConfig.output.library.name = libraryName;
}

const distTask = async ({
  entry = '',
  outputPath = '',
  filename = '',
  libraryName = '',
}) => {
  chdir(porjectRootDir);
  await cleanDirOrFile(outputPath);
  // res1会删除dist，res不会删除dist，因此，得将res1放在res的前面
  const productionMinConfig = await webpackConfig({
    production: true,
    productionMin: true,
  });
  const productionConfig = await webpackConfig({
    production: true,
    productionMin: false,
  });
  changeWebpackConfig({
    productionConfig,
    productionMinConfig,
    entry,
    filename,
    libraryName,
    outputPath,
  });
  return new Promise((resolve, reject) => {
    // 多个配置不会并行运行。每个配置仅在前一个配置完成后处理。
    webpack([productionConfig, productionMinConfig], (err, stats) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.error(info.errors);
      }
      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
      const buildInfo = stats.toString({
        colors: true,
        children: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        hash: false,
        version: false,
      });
      console.log(buildInfo);
      resolve('ok');
    });
  });
};

// 1，将packages/icons-svg/svg里的svg文件解析为Abstract Node，生成asn到packages/icons-svg/asn
const svgToAsn = parallel(
  generateSvgToAsn('../packages/icons-svg/svg/filled/*.svg', {
    theme: 'filled', // 实底
  }),
  generateSvgToAsn('../packages/icons-svg/svg/outlined/*.svg', {
    theme: 'outlined', // 线框
  }),
  generateSvgToAsn('../packages/icons-svg/svg/twotone/*.svg', {
    theme: 'twoTone', // two-tone双色
  })
);
svgToAsn.displayName = 'svgToAsnTask';

// 2，根据packages/icons-svg/asn，生成packages/icons-svg/asn/index.js入口文件
const renderSvgEntry = series(() =>
  gulp
    .src(`${iconsSvgToAsnDir}/**/*.js`)
    .pipe(generateIconSvgEntry())
    .pipe(concat(iconsSvgEntryName))
    .pipe(
      through.obj(function (file, encoding, next) {
        let str = file.contents.toString(encoding);
        str += `\nexport const version = '${pkg.version}';\n`;
        file.contents = Buffer.from(str);
        next(null, file);
      })
    )
    .pipe(
      header(
        '// 这个文件是由build-tools/svgo/template/icon-svg/entry.ejs自动生成的，请勿手动修改！\n\n'
      )
    )
    .pipe(gulp.dest(iconsSvgEntryPath))
);
renderSvgEntry.displayName = 'renderSvgEntryTask';

// 3，根据packages/icons-svg/asn，生成icons-vue的icons，以及生成icons的index.js入口文件
const generateIconsVue = series(
  () =>
    gulp
      .src(`${iconsSvgToAsnDir}/*.js`)
      .pipe(generateIconVueIcons())
      .pipe(gulp.dest(iconsVueIconsEntryPath)),
  generateIconsVueEntry
);
generateIconsVue.displayName = 'generateIconsVueTask';

// npm run compile svg
const iconsSvgTask = gulp.series(
  // series任务要么返回一个流，要么就手动执行done回调
  async (done) => {
    await Promise.all([
      cleanDirOrFile(iconsSvgToAsnDir),
      cleanDirOrFile(`${iconsSvgEntryPath}/${iconsSvgEntryName}`),
      cleanDirOrFile(iconsSvgDistDir),
    ]);
    done();
  },
  svgToAsn,
  renderSvgEntry,
  gulp.parallel(
    function copy(done) {
      copyAssets('icons-svg', done);
    },
    function compileIconSvgEs(done) {
      compileIconSvg(iconSvgFlies, iconsSvgDistDir, false).on(
        'finish',
        function () {
          console.log(chalkSUCCESS('编译icons-svg的es版本成功！'));
          done();
        }
      );
    },
    function compileIconSvgLib(done) {
      compileIconSvg(iconSvgFlies, iconsSvgDistDir, undefined).on(
        'finish',
        function () {
          console.log(chalkSUCCESS('编译icons-svg的lib版本成功！'));
          done();
        }
      );
    }
  ),
  async (done) => {
    await distTask({
      entry: `${iconsSvgEntryPath}/${iconsSvgEntryName}`,
      filename: 'billd-icons-svg',
      libraryName: 'BilldIconsSvg',
      outputPath: `${iconsSvgDistDir}/dist`,
    });
    console.log(chalkSUCCESS('编译icons-svg的umd版本成功！'));
    done();
  }
);

// npm run compile vue
const iconsVueTask = series(
  async (done) => {
    await Promise.all([cleanDirOrFile(iconsVueDistDir)]);
    done();
  },
  generateIconsVue,
  generateIconVueEntry,
  gulp.parallel(
    function copy(done) {
      copyAssets('icons-vue', done);
    },
    function compileIconVueEs(done) {
      compileIconVue(iconVueFlies, iconsVueDistDir, false).on(
        'finish',
        function () {
          console.log(chalkSUCCESS('编译icons-vue的es版本成功！'));
          done();
        }
      );
    },
    function compileIconVueLib(done) {
      compileIconVue(iconVueFlies, iconsVueDistDir, undefined).on(
        'finish',
        function () {
          console.log(chalkSUCCESS('编译icons-vue的lib版本成功！'));
          done();
        }
      );
    }
  ),
  async (done) => {
    await distTask({
      entry: `${iconsVueEntryPath}/${iconsVueEntryName}`,
      filename: 'billd-icons-vue',
      libraryName: 'BilldIconsVue',
      outputPath: `${iconsVueDistDir}/dist`,
    });
    console.log(chalkSUCCESS('编译icons-vue的umd版本成功！'));
    done();
  }
);

// gulp4之前, 定义任务的方式
gulp.task('allTask', series(iconsSvgTask, iconsVueTask));

// gulp4定义任务的方式
module.exports = {
  svgToAsn,
  iconsSvgTask,
  iconsVueTask,
  renderSvgEntry,
  generateIconsVue,
};
