const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 指定入口文件，程序从这里开始，__dirname当前所在目录
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    // 输出路径
    path: path.resolve(__dirname,'./dist'),
    // 打包后文件
    filename: 'app/[name]_[hash:8].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader",
        // 添加浏览器自动加前缀配置
        {loader: 'postcss-loader',options:{plugins:[require("autoprefixer")("last 100 versions")]}},
        "less-loader"
      ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname,  '/dist'),//本地服务器所加载的页面所在的目录
    port: 1414,
    inline: true,
    hot: true,
    historyApiFallback: true
  },
}