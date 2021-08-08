<p align="center">
  <a href="">
    <img
      width="200"
      src="http://thirdqq.qlogo.cn/g?b=oidb&k=oYtOZYZxRicDmv3WsaGKXFQ&s=640&t=1618498456"
    />
  </a>
</p>

<h1 align="center">
  Billd-ui-icons
</h1>

<div align="center">
The abstract node of the Billd-ui SVG icons.
</div>

> https://github.com/galaxy-s10/billd-ui-icons/blob/master/components/icons-svg/README.md

> https://github.com/galaxy-s10/billd-ui-icons/blob/master/components/icons-vue/README.md

# tsconfig.json

```json
{
  "files": ["src/index.js"],
  "compilerOptions": {
    "target": "es6",	// 编译输出目标es版本
    "module": "es6",// 设置后就不会报这个错：Uncaught ReferenceError: exports is not defined
    "jsx": "preserve",
    "esModuleInterop":true,// 可以esm和cjs混用
    "noImplicitAny": false,// 在表达式和声明上有隐含的 any类型时报错。
    "experimentalDecorators": true,	// 启用实验性的ES装饰器。
    "lib": ["dom"],//	编译过程中需要引入的库文件的列表。
    "skipLibCheck": true,// https://github.com/webpack/webpack/issues/12185
    "allowJs": true,
    "moduleResolution": "node",	// 如何处理模块
    "declaration": true,	// 生成相应的 .d.ts文件。
    "rootDir": "../",
    "outDir": "./"
  },
  "include": [
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.js",
    "./src/**/*.jsx"
  ]
}

```