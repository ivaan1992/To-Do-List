const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    modules: [],
    fallback: {
       "fs": false,
       "tls": false,
       "net": false,
       "path": false,
       "zlib": false,
       "http": false,
       "https": false,
       "stream": false,
       "crypto": false,
       "crypto-browserify": require.resolve('crypto-browserify'),
    }
  },
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};