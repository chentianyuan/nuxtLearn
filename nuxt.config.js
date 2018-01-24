module.exports = {
  head: {
    title: 'project1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //loading是nuxt.config.js的一个配置选项
  loading: '~/components/loading.vue',
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.devtool = 'eval-source-map'
      }
    },
    postcss: [
      //添加浏览器前缀
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    css:['~/assets/animate.css'],
    loaders:[{
      test: /\.(scss|sass)$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader"
      }]}],
    //自定义打包名
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    },
    //插件打包,否则每个页面引用axios都会被重新打包一次
    vendor: ['axios']
  },
  //缓存配置
  cache: {
    max: 1000, //缓存组件的最大数目
    maxAge: 900000 //缓存时间
  },
  //在nuxt.config.js，布局或者页面中，配置middleware参数
  //在router中配置middleware参数，每次路由发生跳转后，nuxt.config.js中设置的中间件最先执行
  router:{
    //传入要执行中间件的名字
    middleware:['stat']
  }
}
