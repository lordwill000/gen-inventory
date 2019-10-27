import {
  Admin, Overview, Employees, Racks, StorePartners, Branches, Utilities, Reports, Roles,
} from './index';

export default [
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      isAuthorized: true,
    },
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview,
      },
      {
        path: 'employees',
        name: 'employees',
        component: Employees,
      },
      {
        path: 'racks',
        name: 'racks',
        component: Racks,
      },
      {
        path: 'store-partners',
        name: 'store-partners',
        component: StorePartners,
      },
      {
        path: 'branches',
        name: 'branches',
        component: Branches,
      },
      {
        path: 'utilities',
        name: 'utilities',
        component: Utilities,
      },
      {
        path: 'reports',
        name: 'reports',
        component: Reports,
      },
      {
        path: 'roles',
        name: 'roles',
        component: Roles,
      },
    ],
  },
];
