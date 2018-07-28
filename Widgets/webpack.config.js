var path = require('path');

module.exports = {
  context: __dirname,
  entry: './widgets.jsx',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};