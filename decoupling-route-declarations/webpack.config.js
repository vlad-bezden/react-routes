module.exports = {
  entry: [
    './index.js',
  ],
  devServer: {
    inline: true,
    open: true,
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
