// 这个文件是自动生成的，请勿手动修改！1

import EnvironmentTwoToneSvg from '@huangshuisheng/icons-svg/lib/asn/EnvironmentTwoTone';
import BilldIcon from '../billdIcon';

export default {
  name: 'EnvironmentTwoToneSvg',
  displayName: 'EnvironmentTwoToneSvg',
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
        innerSvgProps={EnvironmentTwoToneSvg.children[0].attributes}
        children={EnvironmentTwoToneSvg.children[0].children}></BilldIcon>
    );
  },
};
