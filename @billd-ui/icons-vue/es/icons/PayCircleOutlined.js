// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！
import PayCircleOutlinedSvg from "@huangshuisheng/icons-svg/es/asn/PayCircleOutlined";
import BilldIcon from '../billdIcon';
export default {
  name: 'PayCircleOutlinedSvg',
  displayName: 'PayCircleOutlinedSvg',
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
        "innerSvgProps": PayCircleOutlinedSvg.children[0].attributes,
        "children": PayCircleOutlinedSvg.children[0].children
      }
    });
  }
};