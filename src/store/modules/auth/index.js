import Cookie from 'js-cookie';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = () => ({
  errors: [],
  token: Cookie.get('auth_token'),
  user: null,
});

export default {
  state,
  actions,
  getters,
  mutations,
};
