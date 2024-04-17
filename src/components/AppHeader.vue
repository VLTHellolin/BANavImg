<script setup lang="ts">
import { ref } from 'vue';
const LeftMenu = ref([
  {
    name: 'Home',
    icon: 'home',
    href: '/',
  },
]);
const RightMenu = ref([
  {
    name: 'About',
    icon: 'info circle',
    href: '/about',
  },
]);
</script>

<template lang="pug">
#header_container.ui.borderless.top.fixed.menu
  .ui.container
    router-link.item(to='/')
      #sitename
        span#sitename_accent.ui.text Vue
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
