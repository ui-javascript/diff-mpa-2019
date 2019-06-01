// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_app",
        modules: "mmplayer",
        resolveAlias: {
            '@': resolve('_app/mmplayer'),
            'assets': resolve('_app/mmplayer/assets'),
            'base': resolve('_app/mmplayer/base'),
            'components': resolve('_app/mmplayer/components'),
            'pages': resolve('_app/mmplayer/pages'),
            'api': resolve('_app/mmplayer/api'),
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
