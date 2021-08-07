"use strict";

var _insertCss = require("insert-css");

var iconStyles = "\n@keyframes billdIconSpin {\n  100% {\n    transform: rotate(360deg)\n  }\n}\n\n.billd-icon-ani {\n  animation: billdIconSpin 1s linear infinite;\n}\n";
(0, _insertCss.insertCss)(iconStyles, {
  prepend: true
});