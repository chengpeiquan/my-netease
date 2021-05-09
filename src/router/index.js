import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@views/home.vue')
  },
  {
    path: '/desktop',
    name: 'desktop',
    component: () => import(/* webpackChunkName: "desktop" */ '@views/desktop.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'cur',
  linkExactActiveClass: 'cur',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
