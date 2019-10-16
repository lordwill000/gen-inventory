import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  isLoading: true,
  isFetching: true,
  data: [],
  error: null,
};

export default {
  state,
  actions,
  getters,
  mutations,
};
