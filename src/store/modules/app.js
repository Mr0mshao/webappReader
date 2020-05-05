const app = {
	state: {
		isLoading: false,
		userInfo: {
			isLogin: false
		}
	},
	getters: {
		'DONE_ISLOADING': state => state.isLoading,
		'DONE_USERINFO': state => state.userInfo
	},
	actions : {
		// 登陆
		'FETCH_LOGIN' ({commit}, payload) {
			// const { username, password } = payload
			// axios.post('./xxxx', {...payload})
			commit('TOGGLE_LOGIN', {...payload})
			return Promise.resolve()
		},
		// 登出
		'FETCH_LOGOUT' ({commit}) {
			// const { username, password } = payload
			// axios.post('./xxxx', {...payload})
			commit('TOGGLE_LOGOUT')
			return Promise.resolve()
		}
	},
	mutations: {
		'TOGGLE_ISLOADING' (state, payload) {
			state.isLoading = payload
		},
		'TOGGLE_LOGIN' (state, payload) {
			state.userInfo = {
				...state.userInfo,
				...payload,
				isLogin: true
			}
		},
		'TOGGLE_LOGOUT' (state, payload) {
			state.userInfo = {
				...state.userInfo,
				isLogin: false,
				username: null,
				password: null
			}
		}
	}
}

export default app
	