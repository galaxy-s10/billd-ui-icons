// 这个文件是自动生成的，请勿手动修改！1
import BorderRightOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/BorderRightOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'BorderRightOutlinedSvg',
  displayName: 'BorderRightOutlinedSvg',
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
        "innerSvgProps": BorderRightOutlinedSvg.children[0].attributes,
        "children": BorderRightOutlinedSvg.children[0].children
      }
    });
  }
};