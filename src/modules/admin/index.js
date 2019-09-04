module.exports = {
  Admin: () => import('./Admin.vue'),
  Overview: () => import('./pages/Overview.vue'),
  Employees: () => import('./pages/Employees.vue'),
  Racks: () => import('./pages/Racks.vue'),
  StorePartners: () => import('./pages/Employees.vue'),
  Branches: () => import('./pages/Branches.vue'),
  Utilities: () => import('./pages/Utilities.vue'),
  Reports: () => import('./pages/Reports.vue'),
};
