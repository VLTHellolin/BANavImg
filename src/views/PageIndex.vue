<script setup lang="ts">
import * as utils from '../utils';
import { ref, reactive } from 'vue';
import axios from 'axios';
utils.setHtmlTitle('Index');
var imgData = reactive({
  source: '',
  title: '',
  author: '',
});
var imgSrc = ref('/img/lx.jpg');
var imgLoading = ref(false);
async function fetchImg() {
  imgLoading.value = true;
  let imgRes = await axios.get('/api/random', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  imgData = imgRes.data.body;
  imgSrc.value = imgRes.data.body.url;
  imgLoading.value = false;
}
</script>

<template lang="pug">
p 咕咕咕
p OneDrive 源有些图片低清是因为参数错了，以后修。
p 该源也不能显示标题与作者。
if imgData.source === ''
  p 请先执行请求。
else if imgData.source === 'onedrive'
  p 这张图来自 OneDrive。
else
  p 这张图是来自 {{ imgData.source }} 的 {{ imgData.author }} 创作的 {{ imgData.title }}。
button.ui.primary.button(@click='fetchImg()') GET
br
br
if imgLoading
  p Loading...
else
  img.ui.huge.image.centered(:disabled='imgLoading', :src='imgSrc' alt='img')
</template>
