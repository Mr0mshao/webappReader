// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import Router from './router/index.js'
import App from './App'
import Home from './views/home'
// import  { LoadingPlugin } from 'vux'
import store from './store/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// Vue.use(LoadingPlugin)
// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router : Router,
  store,
  render: h => h(App)
}).$mount('#app-box')
