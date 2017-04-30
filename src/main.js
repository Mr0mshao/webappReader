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
//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
// Vue.prototype.setCookie = (c_name, value, expiredays) => {
//   var exdate = new Date();　　　　
//   exdate.setDate(exdate.getDate() + expiredays);　　　　
//   document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
// }

// //获取cookie、
// function getCookie(name) {
//   var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
//   if (arr = document.cookie.match(reg))
//     return (arr[2]);
//   else
//     return null;
// }
// Vue.prototype.getCookie = getCookie;

// //删除cookie
// Vue.prototype.delCookie =(name) => {
//     var exp = new Date();
//     exp.setTime(exp.getTime() - 1);
//     var cval = getCookie(name);
//     if (cval != null)
//       document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
//   }


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
