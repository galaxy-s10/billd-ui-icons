// billdIcon.jsx这个文件是icons里面所有文件都依赖的组件

// 处理css
import './handlecss';

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
  render() {
    const svgBaseProps = {
      width: '1em',
      height: '1em',
      fill: 'currentColor',
    };
    return (
      <i style={this.customStyle}>
        <svg
          {...{ attrs: Object.assign(this.innerSvgProps, svgBaseProps) }}
          class={{ 'billd-icon-ani': this.spin }}
          style={{ transform: `rotate(${this.rotate}deg)` }}>
          {this.children &&
            this.children
              .filter((item) => item.name === 'path')
              .map((v) => <path {...{ attrs: v.attributes }}></path>)}
        </svg>
      </i>
    );
  },
};
