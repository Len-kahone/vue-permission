module.exports = {
    // chainWebpack: config => {
    //     config.module.rule('css').use(["sytle-loader",'css-loader'])
            
    // },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
