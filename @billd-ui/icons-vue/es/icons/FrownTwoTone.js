// 这个文件是自动生成的，请勿手动修改！1
import FrownTwoToneSvg from "@huangshuisheng/icons-svg/es/asn/FrownTwoTone";
import BilldIcon from '../billdIcon';
export default {
  name: 'FrownTwoToneSvg',
  displayName: 'FrownTwoToneSvg',
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
        "innerSvgProps": FrownTwoToneSvg.children[0].attributes,
        "children": FrownTwoToneSvg.children[0].children
      }
    });
  }
};