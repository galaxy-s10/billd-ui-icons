// 这个文件只是为了方便写模板，并无实际作用。
import BilldIcon from './billdIcon';
import closeTwoToneSvg from '../icon-svg/asn/reloadOutlined';

export default {
  name: 'IconAimOutlined',
  displayName: 'AimOutlined',
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
    console.log(h);
    console.log(ctx);
    return (
      <BilldIcon
        customStyle={ctx.props.customStyle}
        spin={ctx.props.spin}
        rotate={ctx.props.rotate}
        innerSvgProps={closeTwoToneSvg.children[0].attributes}
        children={closeTwoToneSvg.children[0].children}></BilldIcon>
    );
  },
};
