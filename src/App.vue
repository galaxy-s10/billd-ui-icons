<template>
  <div>
    11
    <!-- <icon-vue a="23"></icon-vue> -->
    <aaa></aaa>
    <close-two-tone
      :spin="true"
      :custom-style="customStyle"
      :rotate="60"
    ></close-two-tone>
  </div>
</template>

<script>
// import * as iconVue from '../components/icon-svg/index';
// import iconVue from '../components/icon-vue';
import closeTwoTone from '../components/icon-vue/lib/ErrorTwoTone';
// import closeTwoTone from '../components/icon-vue/icons/closeTwoTone.jsx';
import aaa from './a.vue';

// console.log(iconVue);
export default {
  components: { aaa, closeTwoTone },
  data() {
    return {
      customStyle: { 'font-size': '20px', color: 'red' },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
