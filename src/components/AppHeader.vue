<script setup lang="ts">
import { ref } from 'vue';
const LeftMenu = ref([
  {
    name: 'Home',
    icon: 'home',
    href: '/',
  },
]);
const RightMenu = ref([]);
</script>

<template lang="pug">
#header-container.ui.borderless.top.fixed.menu
  .ui.container
    router-link.item(to='/')
      #sitename
        span#sitename-accent.ui.text Vue
        span.ui.text App
    each it in LeftMenu
      router-link.item(
        :class='{ active: it.href === $route.path }',
        :to='it.href')
        i.icon(:class='it.icon')
        | {{ it.name }}
    .right.menu
      each it in RightMenu
        router-link.item(
          :class='{ active: it.href === $route.path }',
          :to='it.href')
          i.icon(:class='it.icon')
          | {{ it.name }}
</template>
