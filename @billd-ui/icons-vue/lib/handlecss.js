"use strict";

var _insertCss = _interopRequireDefault(require("./insert-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyles = "\n@keyframes billdIconSpin {\n  100% {\n    transform: rotate(360deg)\n  }\n}\n\n.billd-icon{\n  display: inline-block;\n  line-height: 0;\n}\n\n.billd-icon-ani {\n  animation: billdIconSpin 1s linear infinite;\n}\n";
(0, _insertCss.default)(iconStyles, {
  prepend: true
});