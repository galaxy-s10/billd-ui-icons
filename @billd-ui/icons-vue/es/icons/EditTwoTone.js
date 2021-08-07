// 这个文件是自动生成的，请勿手动修改！1
import EditTwoToneSvg from "@huangshuisheng/icons-svg/es/asn/EditTwoTone";
import BilldIcon from '../billdIcon';
export default {
  name: 'EditTwoToneSvg',
  displayName: 'EditTwoToneSvg',
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
        "innerSvgProps": EditTwoToneSvg.children[0].attributes,
        "children": EditTwoToneSvg.children[0].children
      }
    });
  }
};