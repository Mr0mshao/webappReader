import axios from 'axios'
import * as types from '../types.js'
const state = {
	channelList : [],
}
const getters = {
	[types.DONE_CHANNEL_LIST]:state => state.channelList,
}

const actions = {
	[types.FETCH_CHANNEL_LIST]({commit},params){

		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
		
		const data = {username:"王五",password:"123456"}
		setTimeout(()=>{
			commit(types.TOGGLE_CHANNEL_LIST, data)
			commit(types.TOGGLE_FINISH_LOADING)
		},2000)
	}
}

const mutations = {
	[types.TOGGLE_CHANNEL_LIST](state, all){
		state.channelList = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
