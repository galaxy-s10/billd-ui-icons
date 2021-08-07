// 这个文件是自动生成的，请勿手动修改！1
import PlusSquareOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/PlusSquareOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'PlusSquareOutlinedSvg',
  displayName: 'PlusSquareOutlinedSvg',
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
        "innerSvgProps": PlusSquareOutlinedSvg.children[0].attributes,
        "children": PlusSquareOutlinedSvg.children[0].children
      }
    });
  }
};