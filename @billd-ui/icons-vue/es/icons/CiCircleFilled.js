// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！
import CiCircleFilledSvg from "@huangshuisheng/icons-svg/es/asn/CiCircleFilled";
import BilldIcon from '../billdIcon';
export default {
  name: 'CiCircleFilledSvg',
  displayName: 'CiCircleFilledSvg',
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
        "innerSvgProps": CiCircleFilledSvg.children[0].attributes,
        "children": CiCircleFilledSvg.children[0].children
      }
    });
  }
};