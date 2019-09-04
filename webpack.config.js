const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './view/src/index.js',
  output: {
    path: path.join(__dirname, './view/public'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/], 
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './view/src/index.html'
    })
  ]
}