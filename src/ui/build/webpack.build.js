const path = require('path')
const merge = require('webpack-merge')
const commonCfg = require('./webpack.common')

module.exports = merge(commonCfg, {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../../public/dist'),
    filename: 'bundle.js'
  }
})