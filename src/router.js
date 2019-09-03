import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/views/auth/Auth.vue';
import Employees from '@/views/employees/Employees.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/employees',
      name: 'employees',
      component: Employees,
    },
  ],
});
