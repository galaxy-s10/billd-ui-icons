// 这个文件是自动生成的，请勿手动修改！1
import ReconciliationFilledSvg from "@huangshuisheng/icons-svg/es/asn/ReconciliationFilled";
import BilldIcon from '../billdIcon';
export default {
  name: 'ReconciliationFilledSvg',
  displayName: 'ReconciliationFilledSvg',
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
        "innerSvgProps": ReconciliationFilledSvg.children[0].attributes,
        "children": ReconciliationFilledSvg.children[0].children
      }
    });
  }
};