// 这个文件是自动生成的，请勿手动修改！1
import SignalFilledSvg from "@huangshuisheng/icons-svg/es/asn/SignalFilled";
import BilldIcon from '../billdIcon';
export default {
  name: 'SignalFilledSvg',
  displayName: 'SignalFilledSvg',
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
        "innerSvgProps": SignalFilledSvg.children[0].attributes,
        "children": SignalFilledSvg.children[0].children
      }
    });
  }
};