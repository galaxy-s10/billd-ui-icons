<template>
  <div>
    <billd-icon-error></billd-icon-error>
    <BilldIconError></BilldIconError>
  </div>
</template>

<script>
import Vue from 'vue';
// import { ErrorTwoTone } from '@huangshuisheng/icons-vue';
import { ErrorTwoTone } from '../@billd-ui/icons-vue/es';

Vue.component('BilldIconError', ErrorTwoTone);

export default {};
</script>
