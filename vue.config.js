module.exports = {
  lintOnSave: "default",
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },
  chainWebpack(config) {
    config.module.rule("worker")
      .test(/\.worker\.js$/i)
      .use("worker-loader")
      .loader("worker-loader")
      .tap(options => {
        options = options || {};
        options.inline = "no-fallback";
        return options;
      })
      .end()
      .use("babel-loader")
      .loader("babel-loader");
  }
};
