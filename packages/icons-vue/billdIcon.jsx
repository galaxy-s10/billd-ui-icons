// BilldIcon.jsx这个文件是icons里面所有文件都依赖的组件
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

export default {
  props: {
    innerSvgProps: {
      type: Object,
      default() {
        return {};
      },
    },
    children: {
      type: Array,
      default() {
        return [];
      },
    },
    spin: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: Number,
      default: 360,
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    // 挂载css到head里
    insertCss(iconStyles, {
      prepend: true,
    });
  },
  render() {
    const svgBaseProps = {
      width: '1em',
      height: '1em',
      fill: 'currentColor',
    };
    return (
      <i class="billd-icon" style={this.customStyle}>
        <svg
          {...{ attrs: Object.assign(this.innerSvgProps, svgBaseProps) }}
          class={{ 'billd-icon-ani': this.spin }}
          style={[
            this.spin &&
              this.rotate !== 360 && { transform: `rotate(${this.rotate}deg)` },
          ]}
        >
          {this.children &&
            this.children
              .filter((item) => item.name === 'path')
              .map((v) => <path {...{ attrs: v.attributes }}></path>)}
        </svg>
      </i>
    );
  },
};
