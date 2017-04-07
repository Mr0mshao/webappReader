import axios from 'axios'
import * as types from '../types.js'
const state = {
	homeList : [],
}
const getters = {
	[types.DONE_HOME_LIST]:state => state.homeList,
}

const actions = {
	[types.FETCH_HOME_LIST]({commit},params){
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_N)
		commit(types.TOGGLE_PAGETITLE, '我的书城')
		const data = {username:"王五",password:"123456"}
		setTimeout(()=>{
			commit(types.TOGGLE_HOME_LIST, data)
			commit(types.TOGGLE_FINISH_LOADING)
		},2000)
	}
}

const mutations = {
	[types.TOGGLE_HOME_LIST](state, all){
		state.homeList = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
