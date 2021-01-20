const path = require("path");
module.exports = {
  devServer: {
    proxy: "localhost:8080",
  },
  outputDir: "../../public/assets/app",

  publicPath: "/assets/app",

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Guillaume ROUX Créations";
      args[0].template = "./public/index.php";
      args[0].filename = path.resolve(
        __dirname.split("app")[0],
        "views/app.blade.php"
      );
      return args;
    });
  },
};
