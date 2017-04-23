import axios from 'axios'
import * as types from '../types.js'
const state = {
	book : '',
}
const getters = {
	[types.DONE_READER]:state => state.book,
}

const actions = {
	[types.FETCH_READER]({commit},params){
		console.log(params);
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
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
			console.log(res.data)
			if(res.data.msg == 'error'){
				commit(types.TOGGLE_ALERT_CONTENT,'数据加载错误')
			}else{
				commit(types.TOGGLE_READER, res.data.txt)
				commit(types.TOGGLE_PAGETITLE, res.data.data.name)
			}
			commit(types.TOGGLE_FINISH_LOADING)
	    }).catch(function (error) {
		   console.log(error);
		});

	}
}

const mutations = {
	[types.TOGGLE_READER](state, all){
		state.book = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
