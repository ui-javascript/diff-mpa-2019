import Vue from "vue";
import index from "./index.vue";
import "@/registerServiceWorker";
import "normalize.css/normalize.css";
import "@/styles/common.scss";
import "font-awesome/css/font-awesome.min.css";
import plugin from "@/plugin";

Vue.config.productionTip = false;

Vue.use(plugin);
Vue.component("router-view", () => import("@/components/RouterView.vue"));
new Vue({
  render: h => h(index),
}).$mount("#app");
