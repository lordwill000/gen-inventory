import Vue from 'vue';
import VCalendar from 'v-calendar';
import router from '@/router';
import store from '@/store';
import '@/assets/scss/main.scss';
import App from '@/App.vue';
import './registerServiceWorker';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
