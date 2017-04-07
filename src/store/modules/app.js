import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../types.js'
const state = {
	loading:false,
	isShowBack: false,
	isLogin:false,
	userInfo: window.localStorage.getItem('user') || {},
	registerState:false,
	alertShow:false,
	pageTitle:'我的书城',
}
const getters = {
	[types.DONE_LOADING]:state => state.loading,
	[types.DONE_ISSHOWBACK]:state => state.isShowBack,
	[types.DONE_ISLOGIN]:state => state.isLogin,
	[types.DONE_USERINFO]:state => state.userInfo,
	[types.DONE_REGISTER_STATE]:state => state.registerState,
	[types.DONE_ALERTSHOW]:state => state.alertShow,
	[types.DONE_PAGETITLE]:state => state.pageTitle,
}

const actions = {
	[types.FETCH_LOGIN]({commit}, params){
		state.loading = true
		console.log('params',JSON.stringify(params))
		window.localStorage.setItem('user',JSON.stringify(params))
		setTimeout(()=>{
			commit(types.TOGGLE_LOGIN, params)
			state.alertShow = true
		},2000)
	},
	[types.FETCH_REGISTER]({commit}, params){
		state.loading = true
		console.log('params',JSON.stringify(params))
		window.localStorage.setItem('user',JSON.stringify(params))
		setTimeout(()=>{
			commit(types.TOGGLE_REGISTER, params)
			state.alertShow = true
		},2000)
	},

	[types.FETCH_LOGOUT]({commit}, params){
		commit(types.TOGGLE_LOGOUT)
		state.alertShow = false
		window.localStorage.removeItem('user');
	}
}

const mutations = {
	[types.TOGGLE_LOGIN](state, all){
		state.userInfo = all
		state.isLogin = true
		state.loading = false
	},
	[types.TOGGLE_REGISTER](state, all){
		state.userInfo = all
		state.isLogin = true
		state.loading = false
	},
	[types.TOGGLE_REGISTER_FAILED](state, all){
		state.userInfo = {}
		state.isLogin = false
		state.loading = false
	},
	[types.TOGGLE_LOGOUT](state){
		state.userInfo = {}
		state.isLogin = false
	},
	[types.TOGGLE_START_LOADING](stata){
		state.loading = true
	},
	[types.TOGGLE_FINISH_LOADING](stata){
		state.loading = false
	},
	[types.TOGGLE_ISSHOWBACK_Y](stata){
		state.isShowBack = true
	},
	[types.TOGGLE_ISSHOWBACK_N](stata){
		state.isShowBack = false
	},
	[types.TOGGLE_ALERTSHOW_Y](stata){
		state.alertShow = true
	},
	[types.TOGGLE_PAGETITLE](stata, str){
		state.alertShow = false
		state.pageTitle = str
	}

}

export default {
    state,
    getters,
    mutations,
    actions
}
