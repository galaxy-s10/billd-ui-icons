// 这个文件是自动生成的，请勿手动修改！1
import BuildTwoToneSvg from "@huangshuisheng/icons-svg/es/asn/BuildTwoTone";
import BilldIcon from '../billdIcon';
export default {
  name: 'BuildTwoToneSvg',
  displayName: 'BuildTwoToneSvg',
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
        "innerSvgProps": BuildTwoToneSvg.children[0].attributes,
        "children": BuildTwoToneSvg.children[0].children
      }
    });
  }
};