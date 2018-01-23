const app = {
	state: {
		isLoading: false,
		isLogin: false,
		userInfo: {}
	},
	getters: {
		'DONE_ISLOADING': state => state.isLoading,
		'DONE_ISLOGIN': state => state.isLogin
	},
	actions : {
		'FETCH_LOGIN' ({commit}, payload) {
			// const { username, password } = payload
			// axios.post('./xxxx', {...payload})
			commit('TOGGLE_ISLOADING')
		}
	},
	mutations: {
		'TOGGLE_ISLOADING' (state, payload) {
			state.isLoading = payload
		},
		'TOGGLE_LOGIN' (state, payload) {
			state.isLogin = true
			state.userInfo = {
				...state.userInfo,
				...payload
			}
		}
	}
}

export default app
	