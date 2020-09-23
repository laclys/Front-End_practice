const path = require('path')
const webpack = require('webpack')
const { getIP, resolveApp } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PORT = 9966

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: resolveApp('examples/src/index.tsx'),
  output: {
    publicPath: `//${getIP()}:${PORT}/`,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]_[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@': resolveApp('src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveApp('examples/src/index.html'),
      filename: './index.html',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[hash].chunk.css'
    }),
    new webpack.DefinePlugin({
      __NODE_ENV__: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    host: getIP(),
    port: PORT,
    hot: true,
    open: true,
    progress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {}
  }
}
