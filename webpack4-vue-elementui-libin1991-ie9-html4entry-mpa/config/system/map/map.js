// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_map",
        modules: "map",
        resolveAlias: {},
        externals: {

        },
    },
    build: {
        env: {
            NODE_ENV: '"production"',
        },
    },
    dev: {
        port: 9520,
        env: {
            NODE_ENV: '"development"',
        },
    },
};
