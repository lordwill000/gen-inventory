import { Auth } from './index';

export default [
  {
    path: '/',
    name: 'auth',
    component: Auth,
    meta: {
      unauthorized: true,
    },
  },
];
