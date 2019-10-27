import axios from 'axios';
import Cookie from 'js-cookie';

const baseURL = process.env.VUE_APP_API;

let Authorization = null;
let token = null;
if (Cookie.get('auth_token')) {
  token = Cookie.get('auth_token');
  Authorization = `Bearer ${token}`;
}

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    common: {
      'Access-Control-Allow-Origin': true,
      'Access-Control-Allow-Credentials': true,
      Authorization,
    },
  },
});

export default api;
