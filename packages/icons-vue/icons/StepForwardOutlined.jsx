// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import StepForwardOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/StepForwardOutlined';
import BilldIcon from '../BilldIcon';

export default {
  name: 'StepForwardOutlinedSvg',
  displayName: 'StepForwardOutlinedSvg',
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
        innerSvgProps={StepForwardOutlinedSvg.children[0].attributes}
        children={StepForwardOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
