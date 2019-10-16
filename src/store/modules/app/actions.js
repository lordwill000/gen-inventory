export const types = {
  SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
  GET_HEADER_HEIGHT: 'GET_HEADER_HEIGHT',
  FETCH_EMPLOYEES: 'FETCH_EMPLOYEES',
  FETCH_EMPLOYEES_STATUS: 'FETCH_EMPLOYEES_STATUS',
  FETCH_EMPLOYEES_FAIL: 'FETCH_EMPLOYEES_FAIL',
};

const actions = {
  [types.SET_ACTIVE_TAB]: ({ commit }, payload) => {
    commit(types.SET_ACTIVE_TAB, payload);
  },
  [types.GET_HEADER_HEIGHT]: ({ commit }, payload) => {
    commit(types.GET_HEADER_HEIGHT, payload);
  },
};

export default actions;
