const chalk = require('chalk');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);
module.exports = function (modules) {
  return {
    presets: [
      // ["@babel/env"],
      [
        '@babel/preset-env',
        {
          // https://www.babeljs.cn/docs/babel-preset-env#modules，将此设置为false将保留 ES 模块。
          modules,
        },
      ],
      [
        '@vue/babel-preset-jsx',
        // {
        //   injectH: false,
        // },
      ],
    ],
    plugins: [
      [
        /**
         * @babel/plugin-transform-runtime
         * useBuiltIns和polyfill选项在 v7 中被删除，只是将其设为默认值。
         */
        '@babel/plugin-transform-runtime',
        {
          /**
           * helpers: boolean, 默认true。
           * 如果是true，就会把需要他runtime包给引进来，如：import _defineProperty from "@babel/runtime/helpers/defineProperty"
           * 如果是false，就会把需要的runtime包里面的代码给嵌进bundle里，如function _defineProperty(){}
           * 设置false的话，会导致同一个runtime包里面的代码被很多文件设置，产生冗余的代码。而且因为虽然是同一
           * 份runtime包里面的代码，但是他们在不同的文件（模块）里面，都有自己的作用域，因此在使用类似webpack之类的
           * 打包工具打包的时候，不会做优化。因此推荐设置true，这样可以通过静态分析的手段进行打包，减少打包后的代码体积。
           */
          helpers: true,
          regenerator: true, // 切换生成器函数是否转换为使用不污染全局范围的再生器运行时。默认为true
        },
      ],
      // "transform-vue-jsx",//引入错误，这是Babel6的使用的版本。Babel7不需要这个。
    ],
  };
};
