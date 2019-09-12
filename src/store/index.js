import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const state = {};

const store = new Vuex.Store({
  state,
  modules,
  strict: debug,
  plugins: debug ? [] : [],
});

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const newModules = require('./modules').default;

    store.hotUpdate({
      modules: newModules,
    });
  });
}

export default store;
