// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import {
  __TOKEN_KEY__
} from './api/common'
import './assets/css/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  locale
})

// 登录验证
router.beforeEach((to, from, next) => {
  console.log(from)
  NProgress.start()
  // 调用next方法之前，可以进行授权拦截
  if (to.meta.requireAuth) {
    // console.log(store.getters.token)
    let token = window.localStorage.getItem(__TOKEN_KEY__)
    if (token && token !== '') {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
