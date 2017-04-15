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
		axios.get('http://localhost:80/reader-api/index.php',{
			headers: {'Content-Type':'application/json'}
		}).then((res)=>{
			commit(types.TOGGLE_HOME_LIST, res.data)
			commit(types.TOGGLE_FINISH_LOADING)
		})
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
