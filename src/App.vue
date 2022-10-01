<template>
  <div>
    <AccountBookFilled></AccountBookFilled>
    <AimOutlined></AimOutlined>
    <AimOutlined :custom-style="{ fontSize: '30px' }"></AimOutlined>
    <AimOutlined :custom-style="{ color: 'red' }"></AimOutlined>
    <AimOutlined :spin="true" :rotate="360"></AimOutlined>
  </div>
</template>

<script>
import Vue from 'vue';

import {
  AccountBookFilled,
  AimOutlined,
} from '../packages/icons-vue/dist/es/index';

Vue.component('AccountBookFilled', AccountBookFilled);
Vue.component('AimOutlined', AimOutlined);

// import * as BilldIcon from '../packages/icons-vue/dist/es/index';

// Object.keys(BilldIcon).forEach((key) => {
//   const icon = BilldIcon[key];
//   Vue.component(key, icon);
// });

export default {};
</script>
