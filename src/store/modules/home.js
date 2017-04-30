import axios from 'axios'
import * as types from '../types.js'
const state = {
	homeList : [],
	tt:{index:0,data:[]},
	bb:{index:0,data:[]},
	a:{name:'奇幻玄幻',data:[]},
	b:{name:'武侠仙侠',data:[]},
	c:{name:'都市职场',data:[]},
	d:{name:'历史军事',data:[]},
	e:{name:'游戏体育',data:[]},
	f:{name:'科幻灵异',data:[]},
}
const getters = {
	[types.DONE_HOME_LIST]:state => state.homeList,
}

const actions = {
	[types.FETCH_HOME_LIST]({commit},params){
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_N)
		commit(types.TOGGLE_PAGETITLE, '我的书城')
		axios.get('http://localhost:80/reader-api/v1/home',{
			headers: {'Content-Type':'application/json'}
		}).then((res)=>{
			commit(types.TOGGLE_HOME_LIST, res.data)
			commit(types.TOGGLE_FINISH_LOADING)
		}).catch(function (error) {
		   console.log(error);
		});
	}
}

const mutations = {
	[types.TOGGLE_HOME_LIST](state, all){
		// for(let i=0;i<all.category.length;i++){
		// 	switch(all.category[i].type){
		// 		case '00001':state.a.data.push(all.category[i]);break;
		// 		case '00002':state.b.data.push(all.category[i]);break;
		// 		case '00003':state.c.data.push(all.category[i]);break;
		// 		case '00004':state.d.data.push(all.category[i]);break;
		// 		case '00005':state.e.data.push(all.category[i]);break;
		// 		case '00006':state.f.data.push(all.category[i]);break;
		// 	}
		// }
		// all.category = {};
		
		// state.tt.data.push(state.a);
		// state.tt.data.push(state.b);
		// state.tt.data.push(state.c);
		// state.bb.data.push(state.d);
		// state.bb.data.push(state.e);
		// state.bb.data.push(state.f);
		// all.category.tt = state.tt;
		// all.category.bb = state.bb;
		state.homeList = all
		console.log(state.homeList)
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
