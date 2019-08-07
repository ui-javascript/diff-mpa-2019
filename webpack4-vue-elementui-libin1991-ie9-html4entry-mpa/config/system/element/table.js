// 处理路径
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '../../../' + dir)
}

module.exports = {
  system: {
    supportIE8: false,
    pages: "_element",
    modules: "table",
    resolveAlias: {},
    externals: {},
  },

  build: {}
};
