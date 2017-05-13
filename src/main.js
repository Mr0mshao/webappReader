// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index.js'
import App from './App'
import Home from './views/home'
import store from './store/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */

//日期全局过滤器
Vue.filter("formatDate", function (value) {
  const date = `${value}`;
  const y = date.slice(0,4);
  const m = date.slice(4,6);
  const d = date.slice(6,8);
  const h = date.slice(8,10);
  const mi = date.slice(10,12);
  const s = date.slice(12,14);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`
})
//书籍类型全局过滤器
Vue.filter("formatType", function (value) {
  let str = '';
  switch( value ){
      case '00001':str='玄幻奇幻';break;
      case '00002':str='武侠仙侠';break;
      case '00003':str='都市职场';break;
      case '00004':str='历史军事';break;
      case '00005':str='游戏体育';break;
      case '00006':str='科幻灵异';break;
  }
  return str;
})
new Vue({
  router,
  store,
  render: h => h(App),
  watch:{
  	'$route':'checkLogin'
  },
  created(){
  	this.checkLogin()
  },
  methods:{
  	checkLogin(){
  	  //检查是否存在localStorage
      if(!window.localStorage.getItem('user')){
      }else{
        this.$store.dispatch('FETCH_LOGIN_SESSION',JSON.parse(window.localStorage.getItem('user')))
        // console.log('success',JSON.parse(window.localStorage.getItem('user')))
      }
  	}
  }

}).$mount('#app-box')
