// 这个文件是自动生成的，请勿手动修改！1
import CompassFilledSvg from "@huangshuisheng/icons-svg/es/asn/CompassFilled";
import BilldIcon from '../billdIcon';
export default {
  name: 'CompassFilledSvg',
  displayName: 'CompassFilledSvg',
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
        "innerSvgProps": CompassFilledSvg.children[0].attributes,
        "children": CompassFilledSvg.children[0].children
      }
    });
  }
};