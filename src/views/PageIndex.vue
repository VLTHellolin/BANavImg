<script setup lang="ts">
import * as utils from '../utils';
import { ref } from 'vue';
import axios from 'axios';
utils.setHtmlTitle('Index');
var imgSrc = ref('');
async function fetchImg() {
  let imgId = await axios.get('/api/random');
  imgSrc.value = `https://pixiv.re/${imgId}.png`;
}
</script>

<template lang="pug">
p Hello World
button.ui.primary.button(@click='fetchImg()') GET
img.ui.image(:src='imgSrc' alt=':)')
</template>
