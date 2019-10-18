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
  modal: {
    isVisible: false,
    children: null,
    header: 'Header',
    dimensions: {
      maxHeight: '610px',
      width: '615px',
    },
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
