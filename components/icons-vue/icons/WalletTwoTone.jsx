// 这个文件是自动生成的，请勿手动修改！1

import WalletTwoToneSvg from '@huangshuisheng/icons-svg/lib/asn/WalletTwoTone';
import BilldIcon from '../billdIcon';

export default {
  name: 'WalletTwoToneSvg',
  displayName: 'WalletTwoToneSvg',
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
        innerSvgProps={WalletTwoToneSvg.children[0].attributes}
        children={WalletTwoToneSvg.children[0].children}></BilldIcon>
    );
  },
};
