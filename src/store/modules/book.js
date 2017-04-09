import axios from 'axios'
import * as types from '../types.js'
const state = {
	bookDetail : [],
}
const getters = {
	[types.DONE_BOOK_DETAIL]:state => state.bookDetail,
}

const actions = {
	[types.FETCH_BOOK_DETAIL]({commit},params){
		console.log(params)
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_N)
		commit(types.TOGGLE_PAGETITLE, '我的书城')
		const data = {username:"王五",password:"123456"}
		setTimeout(()=>{
			commit(types.TOGGLE_BOOK_DETAIL, data)
			commit(types.TOGGLE_FINISH_LOADING)
		},2000)
	}
}

const mutations = {
	[types.TOGGLE_BOOK_DETAIL](state, all){
		state.bookDetail = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
