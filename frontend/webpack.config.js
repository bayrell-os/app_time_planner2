const path = require('path');

// Webpack: руководство для начинающих
// https://habr.com/ru/post/514838/
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  mode: 'production',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200,
    poll: 1000,
  },
};
