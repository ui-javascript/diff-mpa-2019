import './demo.less';

import Vue from 'vue'
import App from './App.vue'

import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'

Vue.use(VueProgress, {
  // defaultShape: 'circle',
})

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
