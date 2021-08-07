// 这个文件是自动生成的，请勿手动修改！1

import FundViewOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/FundViewOutlined';
import BilldIcon from '../billdIcon';

export default {
  name: 'FundViewOutlinedSvg',
  displayName: 'FundViewOutlinedSvg',
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
        innerSvgProps={FundViewOutlinedSvg.children[0].attributes}
        children={FundViewOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
