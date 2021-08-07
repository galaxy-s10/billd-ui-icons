// 这个文件是自动生成的，请勿手动修改！1
import ShopTwoToneSvg from "@huangshuisheng/icons-svg/es/asn/ShopTwoTone";
import BilldIcon from '../billdIcon';
export default {
  name: 'ShopTwoToneSvg',
  displayName: 'ShopTwoToneSvg',
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
        "innerSvgProps": ShopTwoToneSvg.children[0].attributes,
        "children": ShopTwoToneSvg.children[0].children
      }
    });
  }
};