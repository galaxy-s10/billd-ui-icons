// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import DollarOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/DollarOutlined';
import BilldIcon from '../BilldIcon';

export default {
  name: 'DollarOutlinedSvg',
  displayName: 'DollarOutlinedSvg',
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
        innerSvgProps={DollarOutlinedSvg.children[0].attributes}
        children={DollarOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
