const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',//本地地址
    port: '8080',//端口号
    hot: true,//热更新自动刷新
    open: true,//自动打开
    proxy: {
      "/api": {
        target: 'http://localhost:8085/grading/',//代理地址 凡是使用/api
        changeOrigin: true,//允许跨域请求
        secure: false,
        pathRewrite: { //重写路径 替换请求地址中的指定路径
          ['^/api']: '' //将请求地址中的api替换为空
        }
      }
    },
    client: {
      overlay: false
    }
  }
})