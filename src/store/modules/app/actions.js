export const types = {
  SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
  GET_HEADER_HEIGHT: 'GET_HEADER_HEIGHT',
  INIT_MODAL: 'INIT_MODAL',
  INIT_ALERT: 'INIT_ALERT',
};

const actions = {
  [types.SET_ACTIVE_TAB]: ({ commit }, payload) => {
    commit(types.SET_ACTIVE_TAB, payload);
  },
  [types.GET_HEADER_HEIGHT]: ({ commit }, payload) => {
    commit(types.GET_HEADER_HEIGHT, payload);
  },
  [types.INIT_MODAL]: ({ commit }, payload) => {
    commit(types.INIT_MODAL, payload);
  },
  [types.INIT_ALERT]: ({ commit }, payload) => {
    commit(types.INIT_ALERT, payload);
  },
};

export default actions;
