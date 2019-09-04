const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    entry: './view/src/components/server.js',
    target: 'node',
    output: {
      path: path.join(__dirname, './view/public'),
      filename: 'server_bundle.js',
      libraryTarget: 'commonjs-module'
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx?$/], 
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  },
  {
    entry: './view/src/components/client.js',
    output: {
      path: path.join(__dirname, './view/public'),
      filename: 'client_bundle.js'
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx?$/], 
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
]
// Original
// module.exports = {
//   entry: './view/src/index.js',
//   output: {
//     path: path.join(__dirname, './view/public'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.js$/, /\.jsx?$/], 
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       }
//     ]
//   },
//   plugins: [
//     new htmlWebpackPlugin({
//       template: './view/src/index.html'
//     })
//   ]
// }

// server side rendering webpack

/**
 * module.exports = [
  {
    entry: './view/src/components/client.js',
    output: {
      path: path.join(__dirname, './view/public'),
      filename: 'client_bundle.js'
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
  }, {
    entry: './view/src/components/server.js',
    target: 'node',
    output: {
      path: path.join(__dirname, './view/public'),
      filename: 'server_bundle.js'
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
]
 */