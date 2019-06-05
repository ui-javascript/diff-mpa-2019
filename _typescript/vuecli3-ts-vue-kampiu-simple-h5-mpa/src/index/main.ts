import Vue from 'vue';
import App from '@/index/App.vue';
import router from '@/index/route/index';
import store from '@/index/store/index';
import '@/registerServiceWorker';
import '@/assets/css/common.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
