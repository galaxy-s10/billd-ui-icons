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

| name                                                                                                     | version                                                                                                                   |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [@huangshuisheng/icons-vue](https://github.com/galaxy-s10/billd-ui-icons/tree/master/packages/icons-vue) | [![npm](https://img.shields.io/npm/v/@huangshuisheng/icons-vue)](https://www.npmjs.com/package/@huangshuisheng/icons-vue) |
| [@huangshuisheng/icons-svg](https://github.com/galaxy-s10/billd-ui-icons/tree/master/packages/icons-svg) | [![npm](https://img.shields.io/npm/v/@huangshuisheng/icons-svg)](https://www.npmjs.com/package/@huangshuisheng/icons-svg) |

# 本地调试

> 可以在 src 目录引入构建好的图标查看效果

```sh
npm run dev
```

# 本地构建

## 打包 packages/svg

```sh
npm run compile:svg
```

> 该脚本内部会做以下事情：

1. 将 packages/icons-svg 里的 svg 文件进行解析并且生成 asn
2. 生成 packages/icons-svg 的入口文件 index.js，这个入口文件引入了所有的 asn
3. 使用 gulp-typescript 将 packages/icons-svg/asn 目录里的文件进行打包，生成 es 和 lib
4. 使用 webpack 对 packages/icons-svg 的入口文件进行打包，生成 dist

## 打包 packages/vue

```sh
npm run compile:vue
```

> 该脚本内部会做以下事情：

1. 根据 packages/icons-svg/asn 里的文件，通过模板，统一生成 vue 组件到 packages/icons-vue/icons
2. 生成 packages/icons-vue 的入口文件 index.js ，这个入口文件引入了所有生成的 vue 组件
3. 使用 gulp-typescript 将 packages/icons-vue/icons 目录里的文件进行打包，生成 es 和 lib
4. 使用 webpack 对 packages/icons-vue 的入口文件进行打包，生成 dist

# 如何发版

## 0.确保 git 工作区干净

即确保本地的修改已全部提交（git status 的时候会显示：`nothing to commit, working tree clean` ），否则会导致执行 `release:local` 脚本失败

## 1.执行本地发版脚本

```sh
npm run release:local
```

> 该脚本内部会做以下事情：

1. 根据用户选择的版本，更新对应 packages 里的包的 package.json 的 version
2. 开始构建 packages 里的包
3. 对比当前版本与上个版本的差异，生成 changelog
4. 提交暂存区到本地仓库：git commit -m 'chore(release): v 当前版本'
5. 生成当前版本 tag：git tag v 当前版本

## 2.执行线上发版脚本

```sh
npm run release:online
```

> 该脚本内部会做以下事情：

1. 提交当前版本：git push
2. 提交当前版本 tag：git push origin v 当前版本
3. 根据 meta/packages.ts，发布 packages 里对应的包到 npm
