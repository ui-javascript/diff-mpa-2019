import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import "normalize.css/normalize.css";
import "@/styles/common.scss";
import "font-awesome/css/font-awesome.min.css";
import singleRouter from "@/utils/singleRouter";
import plugin from "@/plugin";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(plugin);
Vue.use(VueLazyload);
new Vue({
  router: singleRouter("top", () => import("./index.vue")),
  render: h => h(App, { props: { title: "总排行榜" } }),
}).$mount("#app");
