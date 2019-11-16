const pagesConfig = require("./pages.config");
const fs = require("fs");
const pages = {
  index: {
    entry: pagesConfig.entry,
    template: pagesConfig.template,
    chunks: ["chunk-vendors", "chunk-common", "index"],
  },
};
checkExist(pagesConfig.template);
checkExist(pagesConfig.entry);
pagesConfig.pages.forEach(page => {
  pages[page.path] = {
    entry: page.entry,
    template: page.template || pagesConfig.template,
    chunks: ["chunk-vendors", "chunk-common", page.path],
  };
  if (pagesConfig.pagesRoot) {
    pages[page.path].entry = pages[page.path].entry.replace(
      "@/",
      pagesConfig.pagesRoot
    );
    pages[page.path].template = pages[page.path].template.replace(
      "@/",
      pagesConfig.pagesRoot
    );
  }
  checkExist(pages[page.path].entry);
  checkExist(pages[page.path].template || pagesConfig.template);
});
function checkExist(path) {
  if (!fs.existsSync(path)) {
    throw Error(path + " not found");
  }
}
module.exports = {
  pages,
  chainWebpack: config => config.plugins.delete("named-chunks"),
  productionSourceMap: false,
  //   publicPath: "/multi/",
  devServer: {
    port: 31210,
    https: false,
    open: true,
  },
  configureWebpack: {
    externals: {
      lodash: "_",
      vue: "Vue",
      "vue-router": "VueRouter",
      axios: "axios",
    },
  },
};
