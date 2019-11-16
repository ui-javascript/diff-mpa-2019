'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

//全局变量配置
module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://localhost:49502/api/"',
    AuthorionUrl: '"http://cy.ictr.com.cn/auth"'
})
