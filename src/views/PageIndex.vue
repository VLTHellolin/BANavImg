<script setup lang="ts">
import * as utils from '../utils';
import { ref } from 'vue';
import axios from 'axios';
utils.setHtmlTitle('Index');
var imgFrom = ref('请先执行请求');
var imgSrc = ref('/img/lx.jpg');
var imgLoading = ref(false);
async function fetchImg() {
  imgLoading.value = true;
  let imgRes = await axios.get('/api/random', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  imgFrom.value = imgRes.data.body.source;
  imgSrc.value = imgRes.data.body.url;
  imgLoading.value = false;
}
</script>

<template lang="pug">
p 咕咕咕
p 暂时不支持传递自定义 tag、年龄分级等内容
p OneDrive 源有一些图片看起来低清，因为保存的时候参数设错了（悲），以后可能会修
p Image From {{ imgFrom }}
button.ui.primary.button(@click='fetchImg()') GET
br
br
if imgLoading
  p Loading...
else
  img.ui.huge.image.centered(:src='imgSrc' alt='img')
</template>
