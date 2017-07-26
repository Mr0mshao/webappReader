import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app.js'
import home from './modules/home.js'
// import rank from './modules/rank.js'
// import category from './modules/category.js'
// import channel from './modules/channel.js'
// import book from './modules/book.js'
// import catalogue from './modules/catalogue.js'
// import reader from './modules/reader.js'



Vue.use(Vuex)

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules:{
		app,
		home,
		// rank,
		// category,
		// channel,
		// book,
		// catalogue,
		// reader
	},
})