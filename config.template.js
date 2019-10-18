module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080, // 端口号
    disableHostCheck: true,
    open: true, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: {
    // '/': {
    //   target: 'http://wwenj.com',
    //   changeOrigin: true,
    //   ws: false,
    //   bypass: (req, res) => {
    //     if (req.url === '/') return `/static`
    //     // if (/\.\w+$/.test(req.url)) {
    //     //   console.log('skip static', req.url)
    //     //   return req.url
    //     // }
    //   }
    // }
    // }
  },
  pages: {}
};
