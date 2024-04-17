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
      path: '/about',
      component: () => {
        return import('../views/PageAbout.vue');
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
