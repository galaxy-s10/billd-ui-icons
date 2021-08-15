// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import HourglassFilledSvg from '@huangshuisheng/icons-svg/lib/asn/HourglassFilled';
import BilldIcon from '../billdIcon';

export default {
  name: 'HourglassFilledSvg',
  displayName: 'HourglassFilledSvg',
  functional: true,
  props: {
    spin: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: Number,
      default: 360,
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  render(h, ctx) {
    return (
      <BilldIcon
        customStyle={ctx.props.customStyle}
        spin={ctx.props.spin}
        rotate={ctx.props.rotate}
        innerSvgProps={HourglassFilledSvg.children[0].attributes}
        children={HourglassFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
