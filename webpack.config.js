'use strict';

// Load modules;
const path    = require('path');
const webpack = require('webpack');

console.log("Configuring " + __dirname);

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devtool: "source-map", // enum
  target: "web", // enum
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    contentBase: [
      path.join(__dirname, 'public'), // boolean | string | array, static file location
      path.join(__dirname, 'node_modules/mini.css'),
      path.join(__dirname, 'dist')
    ],
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot:                true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
};
