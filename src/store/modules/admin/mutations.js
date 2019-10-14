import types from './types';

export default {
  [types.SET_ACTIVE_TAB]: ((state, payload) => {
    state.activeTab = payload;
  }),
  [types.GET_HEADER_HEIGHT]: ((state, payload) => {
    state.headerHeight = payload;
  }),
};
