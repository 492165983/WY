// vue.config.js
const path = require('path')

function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
  },
  devServer: {
    proxy: {
      '/api/xhr': {
        // 目标地址网易
        target: 'https://m.you.163.com',
        secure:false, // 使用的是http协议则设置为false，https协议则设置为true
        // 是否跨域
        changeOrigin: true,
        // 重写路径的操作---重写api
        pathRewrite: {
          '^/api': ''
        }
      },
      '/api': {
        // 目标地址
        target: 'http://localhost:5000',
        // 是否跨域
        changeOrigin: true,
        // 重写路径的操作---重写api
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}