import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app.js'
import home from './modules/home.js'
Vue.use(Vuex)

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules:{
		app,
		home
	},
})