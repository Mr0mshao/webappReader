import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routers'
Vue.use(Router)
const router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  // console.log('1')
  // 可以在这里做路由拦截
  next()
})

export default router