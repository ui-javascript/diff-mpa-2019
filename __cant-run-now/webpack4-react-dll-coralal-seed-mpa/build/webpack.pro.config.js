const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWbpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');
const { ossPath, pro, entry } = require('./config');
const { env } = pro;

// output
webpackConfig.output.filename = 'js/[name].[chunkhash:8].js';
// webpackConfig.output.chunkFilename = 'vender.[chunkhash:8].js';
webpackConfig.output.publicPath = ossPath;

// module
webpackConfig.module.rules.push({
  test: /\.scss$/,
  include: path.resolve(__dirname, '../src/style'),
  use: [ 
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
    'postcss-loader'
  ]
});

// optimization
webpackConfig.optimization.splitChunks = {
  chunks: 'initial', 
  name: true,
  cacheGroups: {
    common: {
        test:  /[\\/]node_modules[\\/]/,
        name: 'common',
        priority: 10,
        enforce: true
    },
    style: {
      test: /[\\/]style[\\/]common[\\/]/,
      name: 'common',
      priority: 5,
      enforce: true
    }
  }
};
// webpackConfig.optimization.runtimeChunk = {
//     name: entrypoint => `runtimechunk~${entrypoint.name}`
// };
webpackConfig.optimization.minimize = true;
webpackConfig.optimization.minimizer = [
  // new UglifyJsPlugin({ /* your config */ }),
  new OptimizeCssAssetsWebpackPlugin({})
];
webpackConfig.optimization.nodeEnv = env;

// plugins
const HtmlWebpackPluginArray = entry.map(entry => {
  return new HtmlWbpackPlugin({
    title: `dialogflow-${entry}`,
    filename: `${entry}.html`,
    template: path.resolve(__dirname, `../public/views/${entry}.html`),
    minify: {
      caseSensitive: false, //是否大小写敏感
      collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled 
      collapseWhitespace: false, //是否去除空格
    },
    chunks: ['common', entry]
  }) 
});

webpackConfig.plugins = [
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require("./bundle.manifest.json")
  }),
  new webpack.DefinePlugin({
    env: JSON.stringify('production')
  }),
  // 提取css
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/common.[contenthash:8].css"
  }),
  // html 模板
  ...HtmlWebpackPluginArray
]


module.exports = webpackConfig;