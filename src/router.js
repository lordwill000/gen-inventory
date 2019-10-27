import Vue from 'vue';
import Router from 'vue-router';
import Cookie from 'js-cookie';
import decode from 'jwt-decode';
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


router.beforeEach((to, from, next) => {
  const isAuthorized = to.matched.some(({ meta }) => meta.isAuthorized);
  const unauthorized = to.matched.some(({ meta }) => meta.unauthorized);
  const token = Cookie.get('auth_token');
  try {
    if (token) {
      decode(token);
    }

    if (isAuthorized && !token) {
      return next({
        name: 'auth',
        params: {
          errors: [{ message: 'Unauthorized access.' }],
        },
      });
    }

    if (unauthorized && token) {
      return next({
        name: 'admin',
        params: {
          errors: [{ message: 'Already login.' }],
        },
      });
    }
    return next();
  } catch (error) {
    Object.keys(Cookie.get()).forEach((cookie) => {
      Cookie.remove(cookie);
    });
    return next('/');
  }
});

export default router;
