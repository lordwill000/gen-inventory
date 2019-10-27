import authRoutes from './auth/routes';
import adminRoutes from './admin/routes';

export default [
  ...authRoutes,
  ...adminRoutes,
];
