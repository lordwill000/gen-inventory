import api from '@/helpers/base';
import types from './types';

const Cookie = require('js-cookie');

/**
 * TODO: remember_checked_on
 */
export default {
  /**
   * Used for login or setting user details on load
   * @param {Object} vuex
   * @param {Object | String} loginPayload_or_token
   */
  async [types.AUTH_SET]({ dispatch }, payload) {
    dispatch(types.AUTH_SET_ERRORS, []);

    if (payload instanceof Object) {
      Cookie.set('remember_checked_on', payload.remember);
      await api.post('/auth/login', payload).then(
        async ({ data }) => {
          await dispatch(types.AUTH_SET_TOKEN, data.data);
        }, ({ response }) => {
          const { errors } = response.data;
          dispatch(types.AUTH_SET_ERRORS, errors);
        },
      );
    } else if (payload instanceof String) {
      await dispatch(types.AUTH_SET_TOKEN, payload);
    }
  },

  /**
   *
   * @param {Object} vuex
   * @param {String} token
   */
  async [types.AUTH_SET_TOKEN]({ commit, dispatch }, token) {
    await api.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } }).then(
      ({ data }) => {
        commit(types.AUTH_SET, { token, user: data.data });
      }, ({ response }) => {
        const { errors } = response.data;
        dispatch(types.AUTH_SET_ERRORS, errors);
      },
    );
  },

  /**
   * Used for logout function
   * @param {Object} vuex
   */
  [types.AUTH_UNSET]({ commit }) {
    commit(types.AUTH_UNSET);
  },

  /**
   * Used to set errors from request
   * @param {Object} vuex
   * @param {Array} errors
   */
  [types.AUTH_SET_ERRORS]({ commit }, errors) {
    commit(types.AUTH_SET_ERRORS, errors);
  },
};
