var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    mode: 'development',
  entry: './assets/js/main.js',
  output: {
      path: path.resolve('./assets/webpack_bundles//'),
      filename: "[name]-[hash].js"
  },
    module: {
      rules: [
          {
              test: /\.js$/,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: [
                              // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                              ['env', {'modules': false}],
                              // React の JSX を解釈
                              'react'
                          ]
                      }
                  }
              ]
          }
      ]
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats-js.json'})
    ]
}
