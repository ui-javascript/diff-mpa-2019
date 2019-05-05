const webpack = require('webpack');
const htmlWbpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { entry } = require('./config');

const config = {};

// entry
config.entry = {};

entry.forEach(url => { config.entry[url] = `${path.join(__dirname, '../src/page')}/${url}.jsx`; });

// output
config.output = {
  path: path.join(__dirname, '../dist'),
  filename: 'js/[name].[hash:8].js'
}

// module
config.module = {
  rules: [
    {
      test: /\.js(x)?$/,
      include: path.resolve(__dirname, '../src'),
      use: ['babel-loader']
    },
    {
      test: /\.(png | jpg | jpeg | gif | svg | wav | mp3 | woff | ttf)$/,
      include: path.resolve(__dirname, '../src/assets'),
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          callback: {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        }
      }
    },
    {
      test: /\.(mpeg | mp4 | webm | ogv)$/,
      include: path.resolve(__dirname, '../src/assets'),
      use: {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    }
  ]
};

// optimization
config.optimization = {
  splitChunks: {
    chunks: 'initial', 
    filename: 'js/common.[hash:8].js',
    cacheGroups: {
      common: {
          test: /node_modules\//,
          name: 'common',
          priority: 10,
          enforce: true
      }
    }
  }
};

// resolve
config.resolve = {
  alias: {
    _assets: path.resolve(__dirname, '../src/assets'),
    _components: path.resolve(__dirname, '../src/components'),
    _page: path.resolve(__dirname, '../src/page'),
    _style: path.resolve(__dirname, '../src/style'),
    _utils: path.resolve(__dirname, '../src/utils')
  },
  extensions: ['.jsx', '.js', '.json', '.scss']
};

// plugins
config.plugins = [
]

module.exports = config;