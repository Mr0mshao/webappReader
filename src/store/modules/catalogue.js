import axios from 'axios'
import * as types from '../types.js'
const state = {
	list : '',
}
const getters = {
	[types.DONE_CATALOGUR]:state => state.list,
}

const actions = {
	[types.FETCH_CATALOGUR]({commit},params){
		console.log(params);
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
		commit(types.TOGGLE_PAGETITLE, '目录')
		axios({
		  url: 'http://localhost:80/reader-api/v1/book',
		  method: 'post',
		  data: params,
		  transformRequest: [function (data) {	
		    let ret = ''
		    for (let it in data) {
		      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		    }
		    return ret
		  }],
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		  }
		}).then((res)=>{
			if(res.data.msg == 'error'){
				commit(types.TOGGLE_ALERT_CONTENT,'数据加载错误')
			}else{
				commit(types.TOGGLE_CATALOGUR, res.data.data)
			}
			commit(types.TOGGLE_FINISH_LOADING)
	    }).catch(function (error) {
		   console.log(error);
		});

	}
}

const mutations = {
	[types.TOGGLE_CATALOGUR](state, all){
		state.list = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
