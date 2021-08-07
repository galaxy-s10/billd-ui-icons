// 这个文件是自动生成的，请勿手动修改！1

import WarningFilledSvg from '@huangshuisheng/icons-svg/lib/asn/WarningFilled';
import BilldIcon from '../billdIcon';

export default {
  name: 'WarningFilledSvg',
  displayName: 'WarningFilledSvg',
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
        innerSvgProps={WarningFilledSvg.children[0].attributes}
        children={WarningFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
