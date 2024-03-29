const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const util = require('./webpack.util.js')

function addEntry() {
  let entryObj = {}
  util.getEntry().forEach(item => {
    entryObj[item] = path.resolve(__dirname, 'static/view', item)
  })
  return entryObj
}

module.exports = {
  // entry: {
  //   page1: path.resolve(__dirname, 'static/view/page1/index.js'),
  //   page2: path.resolve(__dirname, 'static/view/page2/index.js'),
  // },
  entry: addEntry(),
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
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss?$/,
        use: [{
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
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: "async",
  //     minSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 3,
  //     maxInitialRequests: 3,
  //     name: true
  //   }
  // }
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 注意: priority属性
        // 其次: 打包业务中公共代码
        common: {
          name: "common",
          chunks: "all",
          minSize: 1,
          priority: 0
        },
        // 首先: 打包node_modules中的文件
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10
        }
      }
    }
}
}