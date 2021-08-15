import insertCss from './insert-css';
var iconStyles = "\n@keyframes billdIconSpin {\n  100% {\n    transform: rotate(360deg)\n  }\n}\n\n.billd-icon{\n  display: inline-block;\n  line-height: 0;\n}\n\n.billd-icon-ani {\n  animation: billdIconSpin 1s linear infinite;\n}\n";
insertCss(iconStyles, {
  prepend: true
});