// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_app",
        modules: "happyfri",
        resolveAlias: {
            'src': resolve('_app/happyfri'),
            'assets': resolve('_app/happyfri/assets'),
            'components': resolve('_app/happyfri/components')
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
