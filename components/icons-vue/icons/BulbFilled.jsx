// 这个文件是自动生成的，请勿手动修改！1

import BulbFilledSvg from '@huangshuisheng/icons-svg/lib/asn/BulbFilled';
import BilldIcon from '../billdIcon';

export default {
  name: 'BulbFilledSvg',
  displayName: 'BulbFilledSvg',
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
        innerSvgProps={BulbFilledSvg.children[0].attributes}
        children={BulbFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
