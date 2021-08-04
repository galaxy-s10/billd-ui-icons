import Vue from 'vue';
// console.log(require.context);
const allIcons = require.context('../icon-svg/', true, /\.js$/);
console.log(allIcons);
// console.log(allIcons.keys().length);
const aa = allIcons.keys().map(allIcons);
console.log(aa);
console.log('dddddddd');
