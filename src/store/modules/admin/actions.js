import types from './types';

const actions = {
  [types.SET_ACTIVE_TAB]: ({ commit }, payload) => {
    commit(types.SET_ACTIVE_TAB, payload);
  },
};

export default actions;
