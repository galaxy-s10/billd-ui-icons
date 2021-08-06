// 这个文件是自动生成的，请勿手动修改！
import BilldIcon from '../billdIcon';
import SuccessTwoToneSvg from '../../icon-svg/asn/SuccessTwoTone';
export default {
  name: 'SuccessTwoToneSvg',
  displayName: 'SuccessTwoToneSvg',
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
        "innerSvgProps": SuccessTwoToneSvg.children[0].attributes,
        "children": SuccessTwoToneSvg.children[0].children
      }
    });
  }
};