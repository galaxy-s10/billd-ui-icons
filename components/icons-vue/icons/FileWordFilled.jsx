// 这个文件是自动生成的，请勿手动修改！1

import FileWordFilledSvg from '@huangshuisheng/icons-svg/lib/asn/FileWordFilled';
import BilldIcon from '../billdIcon';

export default {
  name: 'FileWordFilledSvg',
  displayName: 'FileWordFilledSvg',
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
        innerSvgProps={FileWordFilledSvg.children[0].attributes}
        children={FileWordFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
