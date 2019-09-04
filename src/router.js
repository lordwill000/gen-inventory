import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/modules/routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...[
      {
        path: '*',
        component: () => import('@/views/NotFound.vue'),
      },
    ],
  ],
});

export default router;
