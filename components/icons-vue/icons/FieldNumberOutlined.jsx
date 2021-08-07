// 这个文件是自动生成的，请勿手动修改！1

import FieldNumberOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/FieldNumberOutlined';
import BilldIcon from '../billdIcon';

export default {
  name: 'FieldNumberOutlinedSvg',
  displayName: 'FieldNumberOutlinedSvg',
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
        innerSvgProps={FieldNumberOutlinedSvg.children[0].attributes}
        children={FieldNumberOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
