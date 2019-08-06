// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_socket",
        modules: "chat",
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
        port: 9526,
        env: {
            NODE_ENV: '"development"',
        },
    },
};
