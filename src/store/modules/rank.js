import axios from 'axios'
import * as types from '../types.js'
const state = {
	rankList : [],
	pageTitle:'排行榜'
}
const getters = {
	[types.DONE_RANK_LIST]:state => state.rankList,
}

const actions = {
	[types.FETCH_RANK_LIST]({commit},params){
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
		commit(types.TOGGLE_PAGETITLE, '排行')
	    axios.get('http://localhost:80/reader-api/v1/rank',{
	      headers: {'Content-Type':'application/json'}
	    }).then((res)=>{
	      commit(types.TOGGLE_RANK_LIST, res.data)
	      commit(types.TOGGLE_FINISH_LOADING)
	    }).catch(function (error) {
		   console.log(error);
		});
	},
	[types.FETCH_RANK_LIST_MORE]({commit},params){
		axios.get('http://localhost:80/reader-api/v1/rank',{
	      headers: {'Content-Type':'application/json'},
	      params
	    }).then((res)=>{
	      commit(types.TOGGLE_RANK_LIST_MORE, res.data)
	      commit(types.TOGGLE_FINISH_LOADING)
	    }).catch(function (error) {
		   console.log(error);
		});
	}
}

const mutations = {
	[types.TOGGLE_RANK_LIST](state, all){
		state.rankList = all	
	},
	[types.TOGGLE_RANK_LIST_MORE](state, all){
		for(let i=0;i<all.length;i++){
			state.rankList.push(all[i])	
		}
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
