<p align="center">
  <a href="">
    <img
      width="200"
      src="https://resource.hsslive.cn/image/1613141138717Billd.webp"
      alt="Billd-UI_Icons logo"
    />
  </a>
</p>

<h1 align="center">Billd-UI-Icons</h1>

<p align="center">
⭐The abstract node of the Billd-UI SVG icons.
</p>

<div align="center">
<a href="https://www.npmjs.com/package/@huangshuisheng/icons-svg"><img src="https://img.shields.io/npm/v/@huangshuisheng/icons-svg.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/@huangshuisheng/icons-svg"><img src="https://img.shields.io/npm/dw/@huangshuisheng/icons-svg.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/@huangshuisheng/icons-svg"><img src="https://img.shields.io/npm/l/@huangshuisheng/icons-svg.svg" alt="License"></a>
</div>

# Packages

| name                                                                                 | version                                                                                                                   |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| [@huangshuisheng/icons-vue](https://www.npmjs.com/package/@huangshuisheng/icons-vue) | [![npm](https://img.shields.io/npm/v/@huangshuisheng/icons-vue)](https://www.npmjs.com/package/@huangshuisheng/icons-vue) |
| [@huangshuisheng/icons-svg](https://www.npmjs.com/package/@huangshuisheng/icons-svg) | [![npm](https://img.shields.io/npm/v/@huangshuisheng/icons-svg)](https://www.npmjs.com/package/@huangshuisheng/icons-svg) |

# tsconfig.json

```json
{
  "files": ["src/index.js"],
  "compilerOptions": {
    "target": "es6", // 编译输出目标es版本
    "module": "es6", // 设置后就不会报这个错：Uncaught ReferenceError: exports is not defined
    "jsx": "preserve",
    "esModuleInterop": true, // 可以esm和cjs混用
    "noImplicitAny": false, // 在表达式和声明上有隐含的 any类型时报错。
    "experimentalDecorators": true, // 启用实验性的ES装饰器。
    "lib": ["dom"], //	编译过程中需要引入的库文件的列表。
    "skipLibCheck": true, // https://github.com/webpack/webpack/issues/12185
    "allowJs": true,
    "moduleResolution": "node", // 如何处理模块
    "declaration": true, // 生成相应的 .d.ts文件。
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
