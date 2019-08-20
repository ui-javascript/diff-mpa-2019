import Vue from 'vue'

// 全局注册
import App from './views/spin.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
