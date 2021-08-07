// 这个文件是自动生成的，请勿手动修改！1
import SoundOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/SoundOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'SoundOutlinedSvg',
  displayName: 'SoundOutlinedSvg',
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
        "innerSvgProps": SoundOutlinedSvg.children[0].attributes,
        "children": SoundOutlinedSvg.children[0].children
      }
    });
  }
};