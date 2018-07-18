const path = require('path');
const webpack = require('webpack');
const entry = require('webpack-glob-entry');
const ES_PATH = path.join(__dirname, './source/es6/');
const DIST_JS_PATH = path.join(__dirname, './public/frontline/assets/js/');

module.exports = {
  devtool: 'inline-source-map',
  entry: entry(`${ES_PATH}*.js`),
  output: {
    path: DIST_JS_PATH,
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader'
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.jsx','.js','.json']
  }
}