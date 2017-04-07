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
		const data = [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }
      }]
		setTimeout(()=>{
			commit(types.TOGGLE_RANK_LIST, data)
			commit(types.TOGGLE_FINISH_LOADING)
		},2000)
	}
}

const mutations = {
	[types.TOGGLE_RANK_LIST](state, all){
		state.rankList = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
