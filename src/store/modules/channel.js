import axios from 'axios'
import * as types from '../types.js'
const state = {
	channelListMan : [],
	channelListFamale : [],
	channelListManCount:null,
	channelListFamaleCount:null,
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
	    }).catch(function (error) {
		   console.log(error);
		});
	},
	[types.FETCH_CHANNEL_CLEARN_MAN]({commit}){
		commit(types.TOGGLE_CHANNEL_CLEARN_MAN)
	},
	[types.FETCH_CHANNEL_CLEARN_FAMALE]({commit}){
		commit(types.TOGGLE_CHANNEL_CLEARN_FAMALE)
	},
}

const mutations = {
	[types.TOGGLE_CHANNEL_CLEARN_MAN](state){
		state.channelListMan = [];
	},
	[types.TOGGLE_CHANNEL_CLEARN_FAMALE](state){
		state.channelListFamale = [];
	},
	[types.TOGGLE_CHANNEL_LIST_MAN](state, all){
		for(let i=0;i<all.length;i++){
			if(state.channelListMan.length >= all.length){
				if( all[i].id == state.channelListMan[i].id){
				}else{
					state.channelListMan.push(all[i])

				}
			}else{
				state.channelListMan.push(all[i])
			}
		}
	},
	[types.TOGGLE_CHANNEL_LIST_FAMALE](state, all){
		for(let i=0;i<all.length;i++){
			if(state.channelListFamale.length >= all.length){
				if( all[i].id == state.channelListFamale[i].id){
					
				}else{
					state.channelListFamale.push(all[i])
				}
			}else{
				state.channelListFamale.push(all[i])
			}	
		}
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
