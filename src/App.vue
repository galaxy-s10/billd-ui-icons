<template>
  <div>
    11
    <icon-vue a="23"></icon-vue>
    <aaa></aaa>
    <close-two-tone a="23"></close-two-tone>
  </div>
</template>

<script>
// import * as iconVue from '../components/icon-svg/index';
import iconVue from '../components/icon-vue';
import closeTwoTone from '../components/icon-vue/xxx/closeTwoTone';
import aaa from './a.vue';

console.log(iconVue);
export default {
  components: { iconVue, aaa, closeTwoTone },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
