// import Vue from 'vue';
import SvgIcon from './svg';
import closeTwoToneSvg from '../icon-svg/asn/reloadOutlined';
// console.log(require.context);
// const allIcons = require.context('../icon-svg/', true, /\.js$/);
// console.log(allIcons);
// // console.log(allIcons.keys().length);
// const aa = allIcons.keys().map(allIcons);
// console.log(aa);
// console.log('dddddddd');
export default {
  name: 'IconAimOutlined',
  displayName: 'AimOutlined',
  functional: true,
  props: [],
  render(h, ctx) {
    console.log(ctx);
    return (
      <SvgIcon
        innerSvgProps={closeTwoToneSvg.children[0].attributes}
        children={closeTwoToneSvg.children[0].children}></SvgIcon>
    );
  },
};
