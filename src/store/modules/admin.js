import axios from 'axios'
import * as types from '../types/admin.js'
const state = {
	info : '',
	book:'',
	bookList:[],
}
const getters = {
	[types.DONE_ADMIN]:state => state.info,
	[types.DONE_BOOK]:state => state.book,
	[types.DONE_BOOK_LIST]:state => state.bookList,
}

const actions = {
	[types.FETCH_BOOK]({commit},params){
		// axios({
		//   url: 'http://localhost:80/reader-api/v1/admin',
		//   method: 'post',
		//   data: params,
		//   transformRequest: [function (data) {
		//     let ret = ''
		//     for (let it in data) {
		//       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		//     }
		//     return ret
		//   }],
		//   headers: {
		//     'Content-Type': 'application/x-www-form-urlencoded'
		//   }
		// }).then((res)=>{
	 //    	commit(types.TOGGLE_BOOK, res.data)
	 //    }).catch(function (error) {
		//    console.log(error);
		// });
		axios.get(`http://localhost:80/reader-api/v1/admin/${params.id}`,{
			headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		  }	
		}).then((res)=>{
			commit(types.TOGGLE_BOOK,res.data)
		})
	},
	[types.FETCH_ADMIN]({commit},params){
		// commit(types.TOGGLE_START_LOADING)
		// commit(types.TOGGLE_ISSHOWBACK_Y)
		axios.get('http://localhost:80/reader-api/v1/admin',{
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
	},
	[types.FETCH_BOOK_LIST]({commit},parmas){
		// axios({
		//   url: 'http://localhost:80/reader-api/v1/admin',
		//   method: 'post',
		//   data: params,
		//   transformRequest: [function (data) {
		//     let ret = ''
		//     for (let it in data) {
		//       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		//     }
		//     return ret
		//   }],
		//   headers: {
		//     'Content-Type': 'application/x-www-form-urlencoded'
		//   }
		// }).then((res)=>{
		// 	commit(types.TOGGLE_BOOK_LIST,res.data)
		// }).catch(function (error) {
		//    console.log(error);
		// });
		console.log(params);
	}
}

const mutations = {
	[types.TOGGLE_ADMIN](state, all){
		state.info = all	
	},
	[types.TOGGLE_BOOK](state, all){
		state.book = all
	},
	[types.TOGGLE_BOOK_LIST](state,all){
		state.bookList = all;
	}
}

export default {
    state,
    getters,
    mutations,
    actions
}
