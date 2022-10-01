const chalk = require('chalk');

const { distDir } = require('../constant');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: '',
  output: {
    path: distDir,
    filename: '',
    library: {
      // 前端历史：amd（Require.js）、cmd（Sea.js）、commonjs（nodejs）、commonjs2（nodejs）、module(es6)
      name: '',
      type: 'umd', // 浏览器window.BilldIconsVue.aaaaa
      // type: 'var', // 浏览器window.BilldIconsVue.aaaaa
      // type: `self`, // 浏览器window.BilldIconsVue.aaaaa
      // type: `window`, // 浏览器window.BilldIconsVue.aaaaa
      // type: `global`, // 浏览器window.BilldIconsVue.aaaaa
      // type: `amd`, // Uncaught ReferenceError: define is not defined
      // type: 'commonjs2', // Uncaught ReferenceError: module is not defined
      // type: 'commonjs', // Uncaught ReferenceError: exports is not defined
      // type: 'module', // Error: library type "module" is only allowed when 'experiments.outputModule' is enabled
      // type: `system`, // Uncaught ReferenceError: System is not defined
      // type: `jsonp`, // Uncaught ReferenceError: BilldIconsVue is not defined
      // type: `umd2`, // 浏览器window.BilldIconsVue.aaaaa
      // type: `this`, // Uncaught TypeError: Cannot set properties of undefined (setting 'BilldIconsVue')
      // type: `assign`, // 浏览器window.BilldIconsVue.aaaaa
    },
  },
  externals: {
    // https://webpack.js.org/configuration/externals/#object
    // 左边是npm包名，右边是全局变量名
    // vue: 'Vue', // 不会用node_module里的vue打包，正确
    // vue: 'vue', // 不会用node_module里的vue打包，但是挂载的全局变量是小写的vue，报错
    // Vue: 'Vue', // 会用node_module里的vue打包，错误
    // Vue: 'vue', // 会用node_module里的vue打包，错误
    // lodash: '_'
    vue: {
      /**
       * library.type设置umd后，webpack会适配commonjs、commonjs2、amd、root这四种配置，
       * 因此，如果写成对象形式的话，必须正确的设置这四者（如果不设置或者设置错了，比如root设置了小
       * 写的vue，那么在浏览器环境的话，发现root并没有Vue，就会报错，全局变量名设置的一定要和cdn引的Vue导出的全局大写Vue对得上），
       * 其他的设不设置好像都没区别，反正umd不会添加他们
       */
      commonjs: 'Vue', // 适配commonjs环境的全局变量名
      commonjs2: 'Vue', // 适配commonjs2环境的全局变量名
      amd: 'Vue', // 适配amd环境的全局变量名
      root: 'Vue', // 适配全局变量
      global: `Vueglobal`, // 适配global环境的全局变量名，其实没用，因为不会添加它
    },
  },
  optimization: {
    // concatenateModules: false, // production模式下默认true。告知 webpack 去寻找模块图形中的片段，哪些是可以安全地被合并到单一模块中。
    usedExports: true, // production模式或者不设置usedExports，它默认就是true。usedExports的目的是标注出来哪些函数是没有被使用 unused，会结合Terser进行处理
    sideEffects: true, // 告知 webpack 去辨识 package.json 中的 副作用 标记或规则
    minimize: false, // 是否开启Terser，不手动设置的话默认就根据环境判断，production环境就是true，非production环境就是false。设置false后，不会压缩和转化
  },
  plugins: [],
};
