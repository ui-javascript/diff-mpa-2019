import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import "normalize.css/normalize.css";
import "@/styles/common.scss";
import "font-awesome/css/font-awesome.min.css";
import singleRouter from "@/utils/singleRouter";
import plugin from "@/plugin";
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  router: singleRouter("user/bookshelf", () => import("./index.vue")),
  render: h => h(App, { props: { title: "我的书架" } }),
}).$mount("#app");
