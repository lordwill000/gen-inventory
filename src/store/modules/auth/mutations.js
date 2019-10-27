import Cookie from 'js-cookie';
import jwt from 'jwt-decode';
import types from './types';

export default {
  [types.AUTH_SET](state, { token, user }) {
    state.isLoggedIn = true;
    state.user = user;
    state.token = token;

    const decode = jwt(token);
    Cookie.set('auth_token', token, {
      expires: new Date(decode.exp * 1000),
    });
  },
  [types.AUTH_UNSET](state) {
    Cookie.remove('auth_token');
    Cookie.remove('remember_checked_on');

    state.errors = [];
    state.token = null;
    state.user = null;
  },
  [types.AUTH_SET_ERRORS](state, payload) {
    state.errors = payload;
  },
};
