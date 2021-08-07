// 这个文件是自动生成的，请勿手动修改！1

import Html5OutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/Html5Outlined';
import BilldIcon from '../billdIcon';

export default {
  name: 'Html5OutlinedSvg',
  displayName: 'Html5OutlinedSvg',
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
        innerSvgProps={Html5OutlinedSvg.children[0].attributes}
        children={Html5OutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
