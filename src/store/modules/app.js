const app = {
	state: {
		isLoading: false
	},
	getters: {
		'DONE_ISLOADING': state => state.isLoading
	},
	// actions : {},
	mutations: {
		'TOGGLE_ISLOADING' (state, payload) {
			state.isLoading = payload
		}
	}
}

export default app
