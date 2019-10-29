import { types } from './actions';

export default {
  [types.SET_FETCH_STATUS](state, payload) {
    state.isFetching = payload;
  },
  [types.SET_LOADING_STATUS](state, payload) {
    state.isLoading = payload;
  },
  [types.SET](state, payload) {
    Object.keys(payload).map((key) => {
      state[key] = payload[key];
    });
  },
  [types.FAIL](state, payload) {
    state.error = payload;
  },
};
