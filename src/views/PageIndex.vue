<script setup lang="ts">
import * as utils from '../utils';
import { ref } from 'vue';
import axios from 'axios';
utils.setHtmlTitle('Index');
var imgFrom = ref('请先执行请求');
var imgSrc = ref('/img/lx.jpg');
async function fetchImg() {
  let imgRes = await axios.get('/api/random', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  imgFrom.value = imgRes.data.body.source;
  imgSrc.value = imgRes.data.body.url;
}
</script>

<template lang="pug">
p 咕咕咕
p 暂时不支持传递自定义 tag、年龄分级等内容
p Image From {{ imgFrom }}
button.ui.primary.button(@click='fetchImg()') GET
br
img.ui.huge.image.centered(:src='imgSrc' alt='img')
</template>
