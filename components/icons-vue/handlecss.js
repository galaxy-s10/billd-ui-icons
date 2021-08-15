import insertCss from './insert-css';

const iconStyles = `
@keyframes billdIconSpin {
  100% {
    transform: rotate(360deg)
  }
}

.billd-icon{
  display: inline-block;
  line-height: 0;
}

.billd-icon-ani {
  animation: billdIconSpin 1s linear infinite;
}
`;

insertCss(iconStyles, {
  prepend: true,
});
