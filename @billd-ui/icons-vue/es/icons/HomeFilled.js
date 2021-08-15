// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！
import HomeFilledSvg from "@huangshuisheng/icons-svg/es/asn/HomeFilled";
import BilldIcon from '../billdIcon';
export default {
  name: 'HomeFilledSvg',
  displayName: 'HomeFilledSvg',
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
        "innerSvgProps": HomeFilledSvg.children[0].attributes,
        "children": HomeFilledSvg.children[0].children
      }
    });
  }
};