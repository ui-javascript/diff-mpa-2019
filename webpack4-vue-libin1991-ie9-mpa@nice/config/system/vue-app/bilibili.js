// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_app",
        modules: "bilibili",
        resolveAlias: {
            'src': resolve('_app/bilibili'),
            'assets': resolve('_app/bilibili/assets'),
            'api': resolve('_app/bilibili/api'),
            'components': resolve('_app/bilibili/components')
        },
        externals: {
        },
    },
    build: {
        env: {
            NODE_ENV: '"production"',
        },
    },
    dev: {
        port: 9527,
        env: {
            NODE_ENV: '"development"',
        },
    },
};
