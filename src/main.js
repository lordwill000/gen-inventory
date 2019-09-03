import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import '@/assets/scss/main.scss';
import App from '@/App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
