/**
 * @author: Chang Jun
 * @date: 2018/10/8
 * @Description: webpack开发环境配置
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const srcRoot = path.resolve(__dirname, 'src');
const devPath = path.resolve(__dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';


function gethtmlArrary(entryMap) {
  let htmlArrary = [];
  Object.keys(entryMap).forEach((key) => {
    let fullPathName = path.resolve(pageDir, key);
    let fileName = path.resolve(fullPathName, key + '.html');
    if (fs.existsSync(fileName)) {
      htmlArrary.push(new HtmlWebpackPlugin({
        filename: key + '.html',
        template: fileName,
        chunks: [key]
      }));
    }
  });
  return htmlArrary;
}


/* 获取page下所有的入口文件 */
function getEntry() {
  let entryMap = {};

  fs.readdirSync(pageDir).forEach((pathname) => {
    let fullPathName = path.resolve(pageDir, pathname);
    // 判断当前路径的文件是一个文件还是文件夹
    let stat = fs.statSync(fullPathName);
    let fileName = path.resolve(fullPathName, mainFile);
    // 如果当前路径是文件夹并且包含index.js我们就把他放在入口对象里
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathname] = fileName;
    }
  });

  return entryMap
}

const entryMap = getEntry();
const htmlArrary = gethtmlArrary(entryMap);

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: devPath,
    hot: true
  },
  entry: entryMap,
  resolve: {
    alias: {
      component: path.resolve(srcRoot, 'component')
    },
    extensions: ['.js', '.jsx']
  },
  output: {
    path: devPath,
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{loader: "babel-loader"}, {loader: "eslint-loader"}],
        include: srcRoot
      },
      {    // css配置
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: srcRoot
      },
      {   // scss配置
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: "sass-resources-loader",
          options: {
            resources: srcRoot + '/component/common.scss'
          }
        }],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=8192',
        include: srcRoot
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ].concat(htmlArrary)
};