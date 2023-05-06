const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'development'
      ? '/'
      : '//cdn.chengpeiquan.com/my-netease/release/',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8888,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 750,
            minPixelValue: 1,
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img', resolve('src/assets/img'))
      .set('@media', resolve('src/assets/media'))
      .set('@styl', resolve('src/assets/styl'))
      .set('@js', resolve('src/assets/js'))
      .set('@lib', resolve('src/assets/js/lib'))
      .set('@cp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .end()
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'static/img/[name].[hash:8].[ext]',
          },
        },
      })
      .end()
  },
  configureWebpack: () => {
    return {
      module: {
        rules: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
          },
        ],
      },
      plugins: [
        new webpack.BannerPlugin(
          `name: ${pkg.name}\nversion: v${pkg.version}\ndescription: ${pkg.description}\nauthor: ${pkg.author}\nhomepage: ${pkg.homepage}\n`
        ),
      ],
    }
  },
}
