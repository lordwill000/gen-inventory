import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import router from '@/router';
import store from '@/store';
import '@/assets/scss/main.scss';
import App from '@/App.vue';
import './registerServiceWorker';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
