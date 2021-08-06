"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _billdIcon = _interopRequireDefault(require("../billdIcon"));

var _ReloadOutlined = _interopRequireDefault(require("../../icon-svg/asn/ReloadOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 这个文件是自动生成的，请勿手动修改！
var _default2 = {
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
    return h(_billdIcon.default, {
      "attrs": {
        "customStyle": ctx.props.customStyle,
        "spin": ctx.props.spin,
        "rotate": ctx.props.rotate,
        "innerSvgProps": _ReloadOutlined.default.children[0].attributes,
        "children": _ReloadOutlined.default.children[0].children
      }
    });
  }
};
exports.default = _default2;