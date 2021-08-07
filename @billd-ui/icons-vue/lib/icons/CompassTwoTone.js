"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CompassTwoTone = _interopRequireDefault(require("@huangshuisheng/icons-svg/lib/asn/CompassTwoTone"));

var _billdIcon = _interopRequireDefault(require("../billdIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 这个文件是自动生成的，请勿手动修改！1
var _default2 = {
  name: 'CompassTwoToneSvg',
  displayName: 'CompassTwoToneSvg',
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
        "innerSvgProps": _CompassTwoTone.default.children[0].attributes,
        "children": _CompassTwoTone.default.children[0].children
      }
    });
  }
};
exports.default = _default2;