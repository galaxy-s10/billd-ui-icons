// 这个文件是自动生成的，请勿手动修改！1

import PayCircleOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/PayCircleOutlined';
import BilldIcon from '../billdIcon';

export default {
  name: 'PayCircleOutlinedSvg',
  displayName: 'PayCircleOutlinedSvg',
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
        innerSvgProps={PayCircleOutlinedSvg.children[0].attributes}
        children={PayCircleOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
