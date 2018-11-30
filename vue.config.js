module.exports = {
  lintOnSave: true,
  baseUrl: './',
  outputDir: 'dist',
  devServer: {
    host: '127.0.0.1',
    port: 8070,
    https: true,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  }
}
