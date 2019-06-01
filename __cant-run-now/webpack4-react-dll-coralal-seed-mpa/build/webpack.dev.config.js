const path = require('path')
const webpackConfig = require('./webpack.config');

// devServer
// devtool

// module
webpackConfig.module.rules.push({
  test: /\.scss$/,
  include: path.resolve(__dirname, '../src/style'),
  use: [
      'style-loader', 
      'css-loader', 
      'sass-loader',
      'postcss-loader',
    ]
});

// opti
webpackConfig.optimization.runtimeChunk = {
  name: entrypoint => `runtimechunk~${entrypoint.name}`
}

// plugins
const HtmlWebpackPluginArray = entry.map(entry => {
  return new htmlWbpackPlugin({
    title: `dialogflow-${entry}`,
    filename: `${entry}.html`,
    template: path.resolve(__dirname, `../public/views/${entry}.html`),
    minify: {
      caseSensitive: false, //是否大小写敏感
      collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled 
      collapseWhitespace: false, //是否去除空格
    },
    chunks: [`runtimechunk~${entry}`, 'common', entry]
  }) 
});

config.plugins = [
   // 打包优化
   new webpack.DllReferencePlugin({
    context: '.',
    manifest: require("./bundle.manifest.json")
  }),
  // html 模板
  ...HtmlWebpackPluginArray,
  // 全局变量
  new webpack.DefinePlugin({
    env: JSON.stringify('development')
  })
];

module.exports = webpackConfig;