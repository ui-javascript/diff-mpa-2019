// 处理路径
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '../../../' + dir)
}

module.exports = {
  system: {
    supportIE8: false,
    pages: "_demo",
    modules: "spa",
    resolveAlias: {},
    externals: {},
  },

  build: {}
};
