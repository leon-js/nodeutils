const path = require('path')
const merge = require('webpack-merge')
const commonCfg = require('./webpack.common')

module.exports = merge(commonCfg, {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../../public/dist'),
    filename: './bundle.js'
  },
  devServer: {
    port: 7001,
    contentBase: path.resolve(__dirname, '../../../public'),
    disableHostCheck: true,
    //progress: true,
    useLocalIp: true,
    host: '0.0.0.0',
    inline: true
  },
})