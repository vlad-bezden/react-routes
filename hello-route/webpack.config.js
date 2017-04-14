const path = require('path')

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}