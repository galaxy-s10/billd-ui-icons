// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！
import SnippetsOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/SnippetsOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'SnippetsOutlinedSvg',
  displayName: 'SnippetsOutlinedSvg',
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
        "innerSvgProps": SnippetsOutlinedSvg.children[0].attributes,
        "children": SnippetsOutlinedSvg.children[0].children
      }
    });
  }
};