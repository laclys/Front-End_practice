const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    page1: './static/view/page1/index.js',
    page2: './static/view/page2/index.js',
  },
  output: {
    path: __dirname + '/static/dist/',
    filename: '[name]/js/index.js'
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/css/index.css",
      chunkFilename: "[id].css"
    })
  ]
}