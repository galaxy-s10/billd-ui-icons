// 这个文件是自动生成的，请勿手动修改！
import BilldIcon from '../billdIcon';
import ReloadOutlinedSvg from '../../icon-svg/asn/ReloadOutlined';
export default {
  name: 'ReloadOutlinedSvg',
  displayName: 'ReloadOutlinedSvg',
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
        "innerSvgProps": ReloadOutlinedSvg.children[0].attributes,
        "children": ReloadOutlinedSvg.children[0].children
      }
    });
  }
};