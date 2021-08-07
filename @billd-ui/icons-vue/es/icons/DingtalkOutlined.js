// 这个文件是自动生成的，请勿手动修改！1
import DingtalkOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/DingtalkOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'DingtalkOutlinedSvg',
  displayName: 'DingtalkOutlinedSvg',
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
        "innerSvgProps": DingtalkOutlinedSvg.children[0].attributes,
        "children": DingtalkOutlinedSvg.children[0].children
      }
    });
  }
};