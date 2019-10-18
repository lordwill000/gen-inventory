import { types } from './actions';

export default {
  [types.SET_ACTIVE_TAB]: ((state, payload) => {
    state.activeTab = payload;
  }),
  [types.GET_HEADER_HEIGHT]: ((state, payload) => {
    state.headerHeight = payload;
  }),
  [types.INIT_MODAL]: ((state, payload) => {
    state.modal = { ...payload };
  }),
};
