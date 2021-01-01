const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { MiniCSSExtractPlugin } = require("mini-css-extract-plugin");
const path = require(path);

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.sc|ass$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
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
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin(),
    new BundleTracker({
      filename: "./webpack-stats.json",
      path: __dirname,
    }),
  ],
});
