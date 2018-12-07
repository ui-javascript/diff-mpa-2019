const webpack = require('webpack');
const path = require('path');
const { entry } = require('./config');

const config = {};

// entry
config.entry = {
  bundle: [
    'react',
    'react-dom'
  ]
};

// output
config.output = {
  path: path.join(__dirname, '../dist/js'),
  filename: '[name].js',
  library: '[name]_library'
}

// plugins
config.plugins = [
  new webpack.DllPlugin({
    path: path.resolve(__dirname, './bundle.manifest.json'),
    name: '[name]_library'
  })
];

module.exports = config;