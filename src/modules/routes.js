import Home from '@/views';
import authRoutes from './auth/routes';
import adminRoutes from './admin/routes';
import docRoutes from './docs/routes';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  ...authRoutes,
  ...adminRoutes,
  ...docRoutes,
];
