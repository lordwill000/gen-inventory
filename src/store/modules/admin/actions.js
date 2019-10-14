import types from './types';

const actions = {
  [types.SET_ACTIVE_TAB]: ({ commit }, payload) => {
    commit(types.SET_ACTIVE_TAB, payload);
  },
  [types.GET_HEADER_HEIGHT]: ({ commit }, payload) => {
    commit(types.GET_HEADER_HEIGHT, payload);
  },
};

export default actions;
