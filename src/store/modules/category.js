import axios from 'axios';
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
    	commit(types.TOGGLE_PAGETITLE, '分类')
		axios.get('http://localhost:80/reader-api/v1/category',{
			headers: {'Content-Type':'application/json'}
		}).then((res)=>{
			commit(types.TOGGLE_CATEGORY_LIST, res.data)
			commit(types.TOGGLE_FINISH_LOADING)
		});
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
