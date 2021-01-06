import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import baiduAnalytics from 'vue-baidu-analytics'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// import '@lib/vconsole'
import loadScript from '@lib/loadScript'

import {config} from "@js/config"

// 挂载全局配置
Vue.prototype.$config = config

// 执行统计代码
Vue.use(baiduAnalytics, {
  router: router,
  siteIdList: config.baiduAnalytics,
  debug: false
});

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(loadScript);

// 关闭vue提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
