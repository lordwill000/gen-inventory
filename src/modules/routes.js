import Home from '@/views';
import authRoutes from './auth/routes';
import adminRoutes from './admin/routes';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  ...authRoutes,
  ...adminRoutes,
];
