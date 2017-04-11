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
		commit(types.TOGGLE_ISSHOWBACK_Y)
		commit(types.TOGGLE_PAGETITLE, '我的书城')
		const data = {username:"王五",password:"123456"}
		axios.get('http://localhost:80/reader-api/v1/book',{
	      headers: {'Content-Type':'application/json'},
	      params
	    }).then((res)=>{

			commit(types.TOGGLE_BOOK_DETAIL, res.data)
			commit(types.TOGGLE_FINISH_LOADING)
	    })

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
