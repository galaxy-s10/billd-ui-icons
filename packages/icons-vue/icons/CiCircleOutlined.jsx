// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import CiCircleOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/CiCircleOutlined';
import BilldIcon from '../billdIcon';

export default {
  name: 'CiCircleOutlinedSvg',
  displayName: 'CiCircleOutlinedSvg',
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
        innerSvgProps={CiCircleOutlinedSvg.children[0].attributes}
        children={CiCircleOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
