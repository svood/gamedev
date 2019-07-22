// Imports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require("babel-register");
// Webpack Configuration
const config = {
  // Entry
  entry: './src/app.js',
  
  // Output
  output: {
    path: path.resolve(__dirname, './assets/'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules : [
        { test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],},
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true
    }),
    new webpack.ProvidePlugin({
        PIXI: 'pixi.js'
    }) 
  ],

  watch: true,

};
// Exports
module.exports = config