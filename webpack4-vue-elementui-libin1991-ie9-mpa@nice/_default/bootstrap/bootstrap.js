import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './app/index.vue'


// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
