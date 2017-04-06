import axios from 'axios'
import * as types from '../types.js'
const state = {
	categoryList : [],
}
const getters = {
	[types.DONE_CATEGORY_LIST]:state => state.categoryList,
}

const actions = {
	[types.FETCH_CATEGORY_LIST]({commit},params){
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)

		
		const data = {username:"王五",password:"123456"}
		setTimeout(()=>{
			commit(types.TOGGLE_CATEGORY_LIST, data)
			commit(types.TOGGLE_FINISH_LOADING)
		},2000)
	}
}

const mutations = {
	[types.TOGGLE_CATEGORY_LIST](state, all){
		state.categoryList = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
