<script setup lang="ts">
import * as config from '../config';
</script>

<template lang="pug">
#footer-container.ui.center.aligned.container
  .footer-line Made with 💖 by #[a(href='https://hellolin.top' target='_blank') hellolin].
  .footer-line
    code#footer-version
      = config.PROJ_VERSION
      = ' | '
      = config.PROJ_ENV
</template>
