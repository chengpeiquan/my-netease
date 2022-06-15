import Vue from 'vue'
import App from '@/App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'

// 启动H5框架
Vue.use(VueAwesomeSwiper)

// 关闭vue提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
}).$mount('#app')
