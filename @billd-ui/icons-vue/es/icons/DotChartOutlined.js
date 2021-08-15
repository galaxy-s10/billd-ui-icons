// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！
import DotChartOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/DotChartOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'DotChartOutlinedSvg',
  displayName: 'DotChartOutlinedSvg',
  functional: true,
  props: {
    spin: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Number,
      default: 360
    },
    customStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  render: function render(h, ctx) {
    return h(BilldIcon, {
      "attrs": {
        "customStyle": ctx.props.customStyle,
        "spin": ctx.props.spin,
        "rotate": ctx.props.rotate,
        "innerSvgProps": DotChartOutlinedSvg.children[0].attributes,
        "children": DotChartOutlinedSvg.children[0].children
      }
    });
  }
};