const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const styledComponentsTransformer = require('typescript-plugin-styled-components').default;
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new CheckerPlugin()
  ]
};
