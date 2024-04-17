<script setup lang="ts">
import * as config from '../config';
</script>

<template lang="pug">
#footer_container.ui.center.aligned.container
  .footer_line Made with 💖 by #[a(href='https://hellolin.top' target='_blank') hellolin].
  .footer_line
    code#footer_version
      = config.PROJ_VERSION
      = ' | '
      = config.PROJ_ENV
</template>
