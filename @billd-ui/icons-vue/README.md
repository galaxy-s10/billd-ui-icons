<p align="center">
  <a href="">
    <img
      width="200"
      src="http://thirdqq.qlogo.cn/g?b=oidb&k=oYtOZYZxRicDmv3WsaGKXFQ&s=640&t=1618498456"
    />
  </a>
</p>



<h1 align="center">
  Billd-ui-icons
</h1>


<div align="center">
The abstract node of the Billd-ui SVG icons.


</div>

# Install

```bash
npm i @huangshuisheng/icons-vue --save
```



# Base usage

```vue
<template>
  <div>
    <billd-icon-error></billd-icon-error>
    <BilldIconError></BilldIconError>
  </div>
</template>

<script>
import Vue from 'vue';
import { ErrorTwoTone } from '@huangshuisheng/icons-vue';

Vue.component('BilldIconError', ErrorTwoTone);

export default {};
</script>
```

