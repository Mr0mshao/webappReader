import axios from 'axios'
import * as types from '../types.js'
const state = {
	channelListMan : [],
	channelListFamale : [],
}
const getters = {
	[types.DONE_CHANNEL_LIST_MAN]:state => state.channelListMan,
	[types.DONE_CHANNEL_LIST_FAMALE]:state => state.channelListFamale,
}

const actions = {
	[types.FETCH_CHANNEL_LIST]({commit},params){
		console.log('params',params)
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
		axios.get('http://localhost:80/reader-api/v1/channel',{
	      headers: {'Content-Type':'application/json'},
	      params
	    }).then((res)=>{
			if(params.type == 0){
				commit(types.TOGGLE_PAGETITLE, '女生频道')
				commit(types.TOGGLE_CHANNEL_LIST_FAMALE, res.data)

			}else if(params.type == 1){
				commit(types.TOGGLE_PAGETITLE, '男生频道')
				commit(types.TOGGLE_CHANNEL_LIST_MAN, res.data)
			}
			commit(types.TOGGLE_FINISH_LOADING)
	    })
	},
}

const mutations = {
	[types.TOGGLE_CHANNEL_LIST_MAN](state, all){
		for(let i=0;i<all.length;i++){
			state.channelListMan.push(all[i])
		}
	},
	[types.TOGGLE_CHANNEL_LIST_FAMALE](state, all){
		for(let i=0;i<all.length;i++){
			state.channelListFamale.push(all[i])
		}
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
