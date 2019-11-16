import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "../views/login/login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    // ***************************************首页**********************************************
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
