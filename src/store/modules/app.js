import axios from 'axios'
import * as types from '../types.js'
const state = {
	loading:false,
	isShowBack: false,
	isLogin:false,
	userInfo: localStorage.getItem('user') || {}
}
const getters = {
	[types.DONE_LOADING]:state => state.loading,
	[types.DONE_ISSHOWBACK]:state => state.isShowBack,
	[types.DONE_ISLOGIN]:state => state.isLogin,
	[types.DONE_USERINFO]:state => state.userInfo,
}

const actions = {
	[types.FETCH_LOGIN]({commit},params){
		state.loading = true
		const data = {username:"张三",password:"123456"}
		setTimeout(()=>{
			commit(types.TOGGLE_LOGIN, data)
		},2000)
	},
	[types.FETCH_LOGOUT]({commit},params){
		commit(types.TOGGLE_LOGOUT)
	}
}

const mutations = {
	[types.TOGGLE_LOGIN](state, all){
		state.userInfo = all
		state.isLogin = true
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
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
