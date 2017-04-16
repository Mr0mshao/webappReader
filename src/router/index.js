import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Books from '@/views/book'
import Rank  from '@/views/rank'
import Category  from '@/views/category'
import Channel  from '@/views/channel'
import Channel2  from '@/views/channel2'
import Catalogue  from '@/views/catalogue'
import Reader  from '@/views/reader'


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
        path:'/channel/:type',
        name:'channel',
        component: Channel
    },{
    	path:'/channel2/:type',
    	name:'channel2',
    	component: Channel2
    },

    {
    	path:'/category',
    	name:'category',
    	component: Category
    },
    {
        path:'/book/:id',
        name:'book',
        component: Books
    },
    {
        path:'/catalogue/:id',
        name:'catalogue',
        component: Catalogue
    },
    {
    	path:'/reader/:id',
    	name:'reader',
    	component: Reader
    }
  ]
})
