// 这个文件是由build-tools/svgo/template/icon-vue/icon-vue.ejs自动生成的，请勿手动修改！

import ContainerFilledSvg from '@huangshuisheng/icons-svg/lib/asn/ContainerFilled';
import BilldIcon from '../BilldIcon';

export default {
  name: 'ContainerFilledSvg',
  displayName: 'ContainerFilledSvg',
  functional: true,
  props: {
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
  render(h, ctx) {
    return (
      <BilldIcon
        customStyle={ctx.props.customStyle}
        spin={ctx.props.spin}
        rotate={ctx.props.rotate}
        innerSvgProps={ContainerFilledSvg.children[0].attributes}
        children={ContainerFilledSvg.children[0].children}></BilldIcon>
    );
  },
};
