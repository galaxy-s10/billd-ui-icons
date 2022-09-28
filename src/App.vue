<template>
  <div>
    <AccountBookFilled></AccountBookFilled>
    <AimOutlined></AimOutlined>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  AccountBookFilled,
  AimOutlined,
} from '../@billd-ui/icons-vue/es/index';

Vue.component('AccountBookFilled', AccountBookFilled);
Vue.component('AimOutlined', AimOutlined);

// import * as BilldIcon from '../@billd-ui/icons-vue/es/index';

// console.log(BilldIcon);

// Object.keys(BilldIcon).forEach((key) => {
//   const icon = BilldIcon[key];
//   Vue.component(key, icon);
// });

export default {};
</script>
P
