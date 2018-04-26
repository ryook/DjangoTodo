var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    mode: 'development',
  entry: './assets/js/main.js',
  output: {
      path: path.resolve('./assets/webpack_bundles//'),
      filename: "[name]-[hash].js"
  },
    plugins: [
        new BundleTracker({filename: './webpack-stats-js.json'})
    ]
}