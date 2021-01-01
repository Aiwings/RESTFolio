const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "front/bundles"),
  },
  module: {
    rules: [
      {
        test: /\.sc|ass$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
              sassOptions: {
                includePaths: [path.resolve(__dirname, "node_modules")],
              },
              additionalData: '@use "/front/src/scss/index.scss";',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
      title: "Development",
    }),
  ],
});
