const chalk = require('chalk');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);
module.exports = {
  presets: [
    // ["@babel/env"],
    // "@babel/preset-env",
    [
      '@babel/preset-env',
      {
        // modules: "umd",
        // target: {},
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
    // billd-ui支持按需加载，安装babel-plugin-import，然后在babel配置文件添加如下内容即可
    // [
    //   "import",
    //   {
    //     libraryName: "billd-ui",
    //     libraryDirectory: "dist",
    //     style: "css",
    //   },
    //   "billd-ui",
    // ],
    // [
    //   "import",
    //   {
    //     libraryName: "aaax",
    //     libraryDirectory: "lib",
    //     camel2DashComponentName: false,
    //     style: "css",
    //   },
    //   "aaax",
    // ],
    '@babel/plugin-syntax-jsx',
  ],
};
