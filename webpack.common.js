const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
//const __dirname = path.resolve();
module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, "front/src") + "/index.js",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "front/bundles"),
    filename: "[name]-[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "node_modules/@material")],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets",
          esModule: false,
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -10,
          chunks: "all",
        },
      },
    },
  },
};
