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

Vue.use(VueLazyload);
Vue.use(plugin);
new Vue({
  router: singleRouter("sort", () => import("./index.vue")),
  render: h => h(App, { props: { title: "小说分类" } }),
}).$mount("#app");
