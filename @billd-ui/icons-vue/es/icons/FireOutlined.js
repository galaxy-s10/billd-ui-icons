// 这个文件是自动生成的，请勿手动修改！1
import FireOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/FireOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'FireOutlinedSvg',
  displayName: 'FireOutlinedSvg',
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
        "innerSvgProps": FireOutlinedSvg.children[0].attributes,
        "children": FireOutlinedSvg.children[0].children
      }
    });
  }
};