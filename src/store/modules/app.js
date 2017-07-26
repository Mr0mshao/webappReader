import axios from '@/utils/axios_config.js'
// import Cookies from 'js-cookie'
const app = {
	state : {
		loading: false,
		logined: false,
		userInof: {}
	},
	getters : {
		'done_loading_state': state => state.loading
	},
	actions : {
		
	},
	mutations : {
		'toggle_loading_show' (state) {
			state.loading = true
		},
		'toggle_loading_hide' (state) {
			state.loading = false
		}
	}
}

export default app
