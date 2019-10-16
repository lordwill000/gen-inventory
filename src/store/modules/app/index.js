import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  activeTab: {
    module: 'employees',
    tab: {
      id: 0,
      label: 'Employee Management',
      val: 'employee_management',
      suffix: 40,
    },
  },
  headerHeight: 0,
  employees: [],
};

export default {
  state,
  actions,
  getters,
  mutations,
};
