"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./handlecss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default2 = {
  props: {
    innerSvgProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    children: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
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
  render: function render() {
    var h = arguments[0];
    var svgBaseProps = {
      width: '1em',
      height: '1em',
      fill: 'currentColor'
    };
    return h("i", {
      "style": this.customStyle
    }, [h("svg", {
      "attrs": _objectSpread({}, Object.assign(this.innerSvgProps, svgBaseProps)),
      "class": {
        'billd-icon-ani': this.spin
      },
      "style": {
        transform: "rotate(".concat(this.rotate, "deg)")
      }
    }, [this.children && this.children.filter(function (item) {
      return item.name === 'path';
    }).map(function (v) {
      return h("path", {
        "attrs": _objectSpread({}, v.attributes)
      });
    })])]);
  }
};
exports.default = _default2;