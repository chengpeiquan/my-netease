import Vue from 'vue'
import App from '@/App'
import { createBaiduAnalytics } from '@web-analytics/core'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'

// 启动百度统计
const baiduAnalytics = createBaiduAnalytics({
  websiteId: '8dca8e2532df48ea7f1b15c714588691',
})
baiduAnalytics.trackPageview({
  pageUrl: window.location.href,
})

// 启动H5框架
Vue.use(VueAwesomeSwiper)

// 关闭vue提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
}).$mount('#app')
