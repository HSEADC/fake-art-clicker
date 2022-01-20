const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    inline: true,
    host: '10.0.2.15',
    port: 8080
  },
  watch: true,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev_build')
  }
})
