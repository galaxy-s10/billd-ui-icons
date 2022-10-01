// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import EnterOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/EnterOutlined';
import BilldIcon from '../BilldIcon';

export default {
  name: 'EnterOutlinedSvg',
  displayName: 'EnterOutlinedSvg',
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
        innerSvgProps={EnterOutlinedSvg.children[0].attributes}
        children={EnterOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
