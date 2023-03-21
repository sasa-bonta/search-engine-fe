const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '^/api/search': {
        target: 'http://localhost:3000/search',
        pathRewrite: {
          '^/api/search': '',
        },
        ws: true,
        changeOrigin: true,
      },

      '^/api/suggestions': {
        target: 'http://localhost:3000/suggestions',
        pathRewrite: {
          '^/api/suggestions': '',
        },
        ws: true,
        changeOrigin: true,
      },
    }
  }
})
