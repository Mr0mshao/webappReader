import axios from 'axios'
import * as types from '../types.js'
const state = {
	rankList : [],
}
const getters = {
	[types.DONE_RANK_LIST]:state => state.rankList,
}

const actions = {
	[types.FETCH_RANK_LIST]({commit},params){
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
		commit(types.TOGGLE_PAGETITLE, '排行')
		const data = {username:"王五",password:"123456"}
		setTimeout(()=>{
			commit(types.TOGGLE_RANK_LIST, data)
			commit(types.TOGGLE_FINISH_LOADING)
		},2000)
	}
}

const mutations = {
	[types.TOGGLE_RANK_LIST](state, all){
		state.rankList = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
