// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import PieChartFilledSvg from '@huangshuisheng/icons-svg/lib/asn/PieChartFilled';
import BilldIcon from '../billdIcon';

export default {
  name: 'PieChartFilledSvg',
  displayName: 'PieChartFilledSvg',
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
        innerSvgProps={PieChartFilledSvg.children[0].attributes}
        children={PieChartFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
