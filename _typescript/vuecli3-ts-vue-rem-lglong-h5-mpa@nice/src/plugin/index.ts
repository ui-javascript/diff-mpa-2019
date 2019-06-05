import Vue from "vue";
import moment from "moment";
import api from "@/utils/api";

export default {
  install(Vue: any, options: any) {
    Object.entries(api).forEach(item => {
      [, Vue.prototype[item[0]]] = item;
    });
    Vue.prototype.global = {
      defaultImg: 'this.src="' + require("@/assets/default.png") + '"',
    };
    Vue.prototype.bus = new Vue();
    Vue.prototype["_route"] = new Proxy(
      { path: undefined, fullPath: undefined, query: undefined },
      {
        get(t, p) {
          if (p === "path") {
            if (t[p] !== undefined) {
              return t[p];
            }
            let pathReg = /^https?:\/{2}([^/]*)?(?=\/)|\?.*$/g;
            return location.href.replace(pathReg, "");
          }
          if (p === "fullPath") {
            if (t[p] !== undefined) {
              return t[p];
            }
            let pathReg = /https?:\/{2}([^/]*)?(?=\/)/;
            return location.href.replace(pathReg, "");
          }
          if (p === "query") {
            let match = location.href.replace(/&+/g, "&").match(/\?(.*)+/);
            if (match) {
              let params = match[1]
                .split("&")
                .map(item => ({ [item.split("=")[0]]: item.split("=")[1] }));
              return Object.assign({}, ...params);
            }
            return {};
          }
        },
      }
    );
  },
};

Vue.filter("dateTime", (value: any, format = "YYYY-MM-DD HH:mm:SS") => {
  // 纯数字的 string 类型的 timestamp 会报错
  if (typeof value == "string" && /^\d+$/g.test(value)) {
    value = Number(value) * 1;
  }
  return moment(value).format(format);
});

Vue.filter("imgError", (value: any) => {
  return 'this.src="' + require("../assets/default.png") + '"';
});

// directive
Vue.directive("book", {
  bind: function(el: any, binding: any) {
    el.onclick = function() {
      if (!/\w+/i.test(binding.value)) {
        return alert("INVALID_BOOK");
      }
      location.href = "/book/sections.html?bid=" + binding.value;
    };
    el.style.cursor = "pointer";
  },
});
Vue.directive("section", {
  bind: function(el: any, binding: any) {
    el.onclick = function() {
      if (binding.value === null) {
        return alert("没有更多内容了");
      }
      if (binding.value === undefined) {
        return alert("INVALID_SECTION");
      }
      location.href = "/book/sections/contents.html?sid=" + binding.value;
    };
    el.style.cursor = "pointer";
  },
});
Vue.directive("to", {
  bind: function(el: any, binding: any) {
    el.onclick = function() {
      if (
        /^\/user\/bookshelf/i.test(binding.value) &&
        !localStorage.getItem("accessToken")
      ) {
        // 正在登录/注册,不跳转到书架
        if (/sign(in|up)\.html/.test(location.href)) {
          return;
        }
        if (confirm(`未登录，是否前往登录?`)) {
          location.href = "/user/signin.html";
        }
        return;
      }
      // 地址没变化,不跳转
      if (location.href.endsWith(binding.value)) {
        return;
      }
      location.href = binding.value;
    };
    el.style.cursor = "pointer";
  },
});
