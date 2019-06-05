import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/layout/Layout.vue";
import checkLogin from "./checkLogin";

Vue.use(Router);

export default (route: string, childComponent: any) => {
  return checkLogin(
    new Router({
      mode: "history",
      // base: process.env.BASE_URL,
      routes: [
        {
          path: `/${route}.html`,
          component: Layout,
          children: [
            {
              path: "",
              component: childComponent,
            },
          ],
        },
      ],
    })
  );
};
