import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Books from '@/views/book'
import Rank  from '@/views/rank'
import Category  from '@/views/category'
import Channel  from '@/views/channel'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/rank',
    	name:'rank',
    	component:Rank
    },
    {
    	path:'/channel',
    	name:'channel',
    	component: Channel
    },
    // {
    // 	path:'/famale',
    // 	name:'famale',
    // 	component: Famale
    // },
    // {
    // 	path:'/male',
    // 	name:'male',
    // 	component: Male
    // },
    {
    	path:'/category',
    	name:'category',
    	component: Category
    },{
    	path:'/book/:id',
    	name:'book',
    	component: Books
    },
  ]
})
