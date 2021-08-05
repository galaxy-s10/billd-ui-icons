// import svgData from './svgdata';
// import successSvg from '../components/assets/svgdata/close';
import './index.css';

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
  },
  components: {},
  data() {
    return {};
  },
  render() {
    // console.log(this.svgData.children[0]);
    // console.log(successSvg, 5555);
    const svgBaseProps = {
      width: '1em',
      height: '1em',
      fill: 'currentColor',
    };
    // const innerSvgProps = {
    //   ...svgBaseProps,
    //   viewBox,
    //   class: svgClassString,
    //   style: svgStyle,
    // };
    // if (!viewBox) {
    //   delete innerSvgProps.viewBox;
    // }
    // console.log(innerSvgProps);
    // const svg = this.svgDoms.children[0];
    console.log(this.innerSvgProps);
    console.log(this.children);
    return (
      <i>
        svg组件
        <svg
          {...{ attrs: Object.assign(this.innerSvgProps, svgBaseProps) }}
          class="ani">
          {this.children &&
            this.children
              .filter((item) => item.name === 'path')
              .map((v) => <path {...{ attrs: v.attributes }}></path>)}
        </svg>
      </i>
    );
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
