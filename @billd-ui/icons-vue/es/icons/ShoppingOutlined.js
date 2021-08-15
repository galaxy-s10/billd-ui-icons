// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！
import ShoppingOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/ShoppingOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'ShoppingOutlinedSvg',
  displayName: 'ShoppingOutlinedSvg',
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
        "innerSvgProps": ShoppingOutlinedSvg.children[0].attributes,
        "children": ShoppingOutlinedSvg.children[0].children
      }
    });
  }
};