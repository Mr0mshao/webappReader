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
		axios.get(`http://localhost/reader-api/v1/book/${params.id}`,{
	      headers: {'Content-Type':'application/json'}
	    }).then((res)=>{
			commit(types.TOGGLE_BOOK_DETAIL, res.data)
			commit(types.TOGGLE_PAGETITLE, `${res.data.name}`)
			commit(types.TOGGLE_FINISH_LOADING)
	    }).catch(function (error) {
		   console.log(error);
		});

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
