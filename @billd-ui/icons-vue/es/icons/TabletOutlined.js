// 这个文件是自动生成的，请勿手动修改！1
import TabletOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/TabletOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'TabletOutlinedSvg',
  displayName: 'TabletOutlinedSvg',
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
        "innerSvgProps": TabletOutlinedSvg.children[0].attributes,
        "children": TabletOutlinedSvg.children[0].children
      }
    });
  }
};