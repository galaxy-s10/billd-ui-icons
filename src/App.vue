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
// 按需导入
import { AccountBookFilled, AimOutlined } from '@huangshuisheng/icons-vue';
import Vue from 'vue';
Vue.component('AccountBookFilled', AccountBookFilled);
Vue.component('AimOutlined', AimOutlined);

// 全局导入
// import * as BilldIcon from '@huangshuisheng/icons-vue';
// import Vue from 'vue';
// Object.keys(BilldIcon).forEach((key) => {
//   const icon = BilldIcon[key];
//   Vue.component(key, icon);
// });

// 按需导入
// import Vue from 'vue';

// import { AccountBookFilled, AimOutlined } from '../packages/icons-vue/dist/es';
// Vue.component('AccountBookFilled', AccountBookFilled);
// Vue.component('AimOutlined', AimOutlined);

// 全局导入
// import Vue from 'vue';

// import * as BilldIcon from '../packages/icons-vue/dist/es';

// Object.keys(BilldIcon).forEach((key) => {
//   const icon = BilldIcon[key];
//   Vue.component(key, icon);
// });

export default {};
</script>
