import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app.js'
import home from './modules/home.js'
import rank from './modules/rank.js'
import category from './modules/category.js'
import channel from './modules/channel.js'
import book from './modules/book.js'



Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		app,
		home,
		rank,
		category,
		channel,
		book
	},
})