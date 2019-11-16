import Vue from 'vue';
import App from '@/admin/App.vue';
import router from '@/admin/route/index';
import store from '@/admin/store/index';
import '@/registerServiceWorker';
import '@/assets/css/common.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
