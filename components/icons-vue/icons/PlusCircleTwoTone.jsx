// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import PlusCircleTwoToneSvg from '@huangshuisheng/icons-svg/lib/asn/PlusCircleTwoTone';
import BilldIcon from '../billdIcon';

export default {
  name: 'PlusCircleTwoToneSvg',
  displayName: 'PlusCircleTwoToneSvg',
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
        innerSvgProps={PlusCircleTwoToneSvg.children[0].attributes}
        children={PlusCircleTwoToneSvg.children[0].children}></BilldIcon>
    );
  },
};
