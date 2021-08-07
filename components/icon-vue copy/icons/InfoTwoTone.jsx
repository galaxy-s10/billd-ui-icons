// 这个文件是自动生成的，请勿手动修改！

import BilldIcon from '../billdIcon';
import InfoTwoToneSvg from '../../icon-svg/asn/InfoTwoTone';

export default {
  name: 'InfoTwoToneSvg',
  displayName: 'InfoTwoToneSvg',
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
        innerSvgProps={InfoTwoToneSvg.children[0].attributes}
        children={InfoTwoToneSvg.children[0].children}></BilldIcon>
    );
  },
};
