// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！
import PoundCircleTwoToneSvg from "@huangshuisheng/icons-svg/es/asn/PoundCircleTwoTone";
import BilldIcon from '../billdIcon';
export default {
  name: 'PoundCircleTwoToneSvg',
  displayName: 'PoundCircleTwoToneSvg',
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
        "innerSvgProps": PoundCircleTwoToneSvg.children[0].attributes,
        "children": PoundCircleTwoToneSvg.children[0].children
      }
    });
  }
};