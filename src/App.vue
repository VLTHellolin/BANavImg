<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template lang="pug">
AppHeader
#main_container.ui.container
  RouterView
AppFooter
</template>
