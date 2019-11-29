const path = require("path");
const WebpackDashboard = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackDashboard(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new WebpackMd5Hash()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    writeToDisk: true
  }
};
