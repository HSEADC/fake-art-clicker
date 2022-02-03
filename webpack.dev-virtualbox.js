const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dev_build',
    inline: true,
    host: '10.0.2.15',
    port: 8080,
    hot: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev_build')
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
})