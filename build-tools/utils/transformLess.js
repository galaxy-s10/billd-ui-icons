const { readFileSync } = require('fs');
const path = require('path');

const less = require('less');

const { resolveApp } = require('./paths');
// less3+默认就会搜索npm路径
// const NpmImportPlugin = require("less-plugin-npm-import");

function transformLess(lessFile) {
  // 使用node的fs模块，同步读取lessFile文件，拿到的是字符串
  let data = readFileSync(lessFile, 'utf-8');
  // 这里应该是处理编码问题，参考了antd-tools
  data = data.replace(/^\uFEFF/, '');
  const resolvedLessFile = resolveApp(lessFile);

  // https://less.bootcss.com/usage/#lessjs-options
  // 设置less选项，方便处理编译less时遇到的警告或报错。
  const lessOpts = {
    paths: [path.dirname(resolvedLessFile)],
    path: resolvedLessFile,
    filename: resolvedLessFile,
    // plugins: [new NpmImportPlugin({ prefix: "~" })],
    // compress: true, //使用less内置的压缩，但最好在解析完成less后，用第三方插件再次解析压缩。
    javascriptEnabled: true, // 允许在.less文件中内联计算JavaScript
  };
  // console.log(lessOpts,'lessOptslessOpts');
  // console.log(data,'datadata');
  return less.render(data, lessOpts).then((r) => r.css);
  // return less.render(data, lessOpts).then(r => {
  //   // r.css是解析less后得到的css字符串
  //   return r.css;
  // });
}

module.exports = transformLess;
