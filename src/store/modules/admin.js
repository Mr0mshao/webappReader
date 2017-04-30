import axios from 'axios'
import * as types from '../types.js'
const state = {
	info : '',
}
const getters = {
	[types.DONE_ADMIN]:state => state.info,
}

const actions = {
	[types.FETCH_ADMIN]({commit},params){
		console.log(params)
		// commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
		axios({
		  url: 'http://localhost:80/reader-api/v1/admin',
		  method: 'post',
		  data: params,
		  transformRequest: [function (data) {
		    let ret = ''
		    for (let it in data) {
		      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		    }
		    console.log(ret)
		    return ret
		  }],
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		  }
		}).then((res)=>{
			commit(types.TOGGLE_ADMIN, res.data)
			// commit(types.TOGGLE_PAGETITLE, `${res.data.name}`)
			// commit(types.TOGGLE_FINISH_LOADING)
	    }).catch(function (error) {
		   console.log(error);
		});

	}
}

const mutations = {
	[types.TOGGLE_ADMIN](state, all){
		state.info = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
