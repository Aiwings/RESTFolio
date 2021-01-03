const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  publicPath: "http://0.0.0.0:8080/",
  outputDir: "./dist/",
  chainWebpack: (config) => {
    config.optimization.splitChunks(false);
    config.output.filename("bundle.js");
    config.plugin("BundleTracker").use(BundleTracker, [
      {
        filename: "./webpack-stats.json",
        path: __dirname,
      },
    ]);

    config.resolve.alias.set("__STATIC__", "static");
    //config.output.filename("bundle.js");
    config.devServer
      .public("http://127.0.0.1:8080")
      .host("127.0.0.1")
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .disableHostCheck(true)
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["*"] });
  },
  transpileDependencies: ["vuetify"],
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       //prependData: `@use "@/scss/index.scss"`,
  //     },
  //   },
  // },
};
