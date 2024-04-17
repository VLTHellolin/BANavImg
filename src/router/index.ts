import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => {
        return import('../views/PageIndex.vue');
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => {
        return import('../views/PageNotFound.vue');
      },
    },
  ],
});

export default router;
