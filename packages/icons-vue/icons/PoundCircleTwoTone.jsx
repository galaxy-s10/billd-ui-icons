// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import PoundCircleTwoToneSvg from '@huangshuisheng/icons-svg/lib/asn/PoundCircleTwoTone';
import BilldIcon from '../BilldIcon';

export default {
  name: 'PoundCircleTwoToneSvg',
  displayName: 'PoundCircleTwoToneSvg',
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
        innerSvgProps={PoundCircleTwoToneSvg.children[0].attributes}
        children={PoundCircleTwoToneSvg.children[0].children}></BilldIcon>
    );
  },
};
