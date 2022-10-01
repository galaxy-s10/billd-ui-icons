// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import WeiboCircleFilledSvg from '@huangshuisheng/icons-svg/lib/asn/WeiboCircleFilled';
import BilldIcon from '../BilldIcon';

export default {
  name: 'WeiboCircleFilledSvg',
  displayName: 'WeiboCircleFilledSvg',
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
        innerSvgProps={WeiboCircleFilledSvg.children[0].attributes}
        children={WeiboCircleFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
