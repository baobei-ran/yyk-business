// const Timestamp = new Date().getTime(), VUE_APP_Version = 'v1.0.0';
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/h5bus/' : '/', // 公共路径
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js'];
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    // output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
    //   filename: `[name].${VUE_APP_Version}.${Timestamp}.js`,
    //   chunkFilename: `[name].${VUE_APP_Version}.${Timestamp}.js`
    // }
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
      open: true,
      // host: "192.168.110.222",
      host: "192.168.124.9",
      port: 8081,
      https: false,
      hotOnly: false,
      proxy: { // 配置跨域
        "/api": { // 要访问的跨域的api的域名
          target: "http://test99.yunyikang.cn",
          ws: true,
          changOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      },
  },
  pluginOptions: {}
}