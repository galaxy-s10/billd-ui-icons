<h1 align="center">Billd-UI Icons for Vue</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@huangshuisheng/icons-vue.svg)](https://npmjs.org/package/@ant-design/icons-vue)
[![NPM downloads](https://img.shields.io/npm/dw/@huangshuisheng/icons-vue.svg)](https://npmjs.org/package/@ant-design/icons-vue)

</div>

# Install

```bash
npm i @huangshuisheng/icons-vue --save
```

# Base usage

> support tree shaking!

```vue
<template>
  <div>
    <account-book-filled></account-book-filled>
    <AccountBookFilled></AccountBookFilled>
  </div>
</template>

<script>
import Vue from 'vue';
import { AccountBookFilled } from '@huangshuisheng/icons-vue';

Vue.component('AccountBookFilled', AccountBookFilled);

export default {};
</script>
```

> all in import, no support tree shaking!
>
> default component name: https://github.com/galaxy-s10/billd-ui-icons/tree/master/packages/icons-vue/icons

```vue
<template>
  <div>
    <account-book-filled></account-book-filled>
    <AccountBookFilled></AccountBookFilled>
  </div>
</template>

<script>
import Vue from 'vue';
import * as BilldIcon from '@huangshuisheng/icons-vue';

Object.keys(BilldIcon).forEach((key) => {
  const icon = BilldIcon[key];
  Vue.component(key, icon);
});

export default {};
</script>
```
