// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import PictureOutlinedSvg from '@huangshuisheng/icons-svg/lib/asn/PictureOutlined';
import BilldIcon from '../BilldIcon';

export default {
  name: 'PictureOutlinedSvg',
  displayName: 'PictureOutlinedSvg',
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
        innerSvgProps={PictureOutlinedSvg.children[0].attributes}
        children={PictureOutlinedSvg.children[0].children}></BilldIcon>
    );
  },
};
