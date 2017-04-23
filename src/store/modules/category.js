import axios from 'axios';
import * as types from '../types.js'
const state = {
	categoryList : [],
	categoryDetail : [],
}
const getters = {
	[types.DONE_CATEGORY_LIST]:state => state.categoryList,
	[types.DONE_CATEGORY_DETAIL]:state => state.categoryDetail,
}

const actions = {
	[types.FETCH_CATEGORY_LIST]({commit},params){
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
    	commit(types.TOGGLE_PAGETITLE, '分类')
		axios.get('http://localhost:80/reader-api/v1/category',{
			headers: {'Content-Type':'application/json'}
		}).then((res)=>{
			commit(types.TOGGLE_CATEGORY_LIST, res.data)
			commit(types.TOGGLE_FINISH_LOADING)
		}).catch(function (error) {
		   console.log(error);
		});
	},
	[types.FETCH_CATEGORY_DETAIL]({commit},params){
		let str='';
		switch(params.id){
			case '00001':str='玄幻奇幻';break;
			case '00002':str='武侠仙侠';break;
			case '00003':str='都市职场';break;
			case '00004':str='历史军事';break;
			case '00005':str='游戏体育';break;
			case '00006':str='科幻灵异';break;
		}
		commit(types.TOGGLE_START_LOADING)
		commit(types.TOGGLE_ISSHOWBACK_Y)
    	commit(types.TOGGLE_PAGETITLE, str)
		axios.get('http://localhost:80/reader-api/v1/category',{
			headers: {'Content-Type':'application/json'},
			params
		}).then((res)=>{
			commit(types.TOGGLE_CATEGORY_DETAIL, res.data)
			commit(types.TOGGLE_FINISH_LOADING)
		}).catch(function (error) {
		   console.log(error);
		});
	},
}

const mutations = {
	[types.TOGGLE_CATEGORY_LIST](state, all){
		state.categoryList = all	
	},[types.TOGGLE_CATEGORY_DETAIL](state, all){
		state.categoryDetail = all	
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
