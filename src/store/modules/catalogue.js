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
		axios.get('http://localhost:80/reader-api/text.php',{
	      headers: {'Content-Type':'application/json'},
	      params
	    }).then((res)=>{
			commit(types.TOGGLE_CATALOGUR, res.data)
			// commit(types.TOGGLE_PAGETITLE, `${res.data.name}`)
			commit(types.TOGGLE_FINISH_LOADING)
	    })

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
