import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vuePugSyntax from 'vue-pug-syntax';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          plugins: [vuePugSyntax],
        },
      },
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
