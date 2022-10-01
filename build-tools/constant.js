const path = require('path');

// path.resolve里的参数不管结尾带不带/,最终处理的路径最后结尾都不带/
// 即path.resolve(__dirname, '../dist')和path.resolve(__dirname, '../dist/')，最终生成的路径是/xx/xx/dist
module.exports = {
  porjectRootDir: path.resolve(__dirname, '../'),
  distDir: path.resolve(__dirname, '../dist'),
  iconsSvgDistDir: path.resolve(__dirname, '../packages/icons-svg/dist'),
  iconsSvgEntryName: 'index.js',
  iconsSvgEntryPath: path.resolve(__dirname, '../packages/icons-svg'),
  iconsSvgToAsnDir: path.resolve(__dirname, '../packages/icons-svg/asn'),
  iconsVueDistDir: path.resolve(__dirname, '../packages/icons-vue/dist'),
  iconsVueIconsPath: path.resolve(__dirname, '../packages/icons-vue/icons'),
  iconsVueEntryPath: path.resolve(__dirname, '../packages/icons-vue'),
  iconsVueEntryName: 'index.js',
};
