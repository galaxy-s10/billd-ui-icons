// 这个文件是自动生成的，请勿手动修改！1

import FolderFilledSvg from '@huangshuisheng/icons-svg/lib/asn/FolderFilled';
import BilldIcon from '../billdIcon';

export default {
  name: 'FolderFilledSvg',
  displayName: 'FolderFilledSvg',
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
        innerSvgProps={FolderFilledSvg.children[0].attributes}
        children={FolderFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
