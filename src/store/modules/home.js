import axios from '@/utils/axios_config.js'
const home = {
  state: {
    home: [],
    search: []
  },
  getters: {
    'done_home_list': state => state.home,
    'done_search_list': state => state.search
  },
  actions: {
    // home data
    'fetch_home_list' ({commit}) {
      axios
      .get('http://localhost:8088/')
      .then((res) => {
        console.log(res)
        commit('toggle_home_list', res.data)
      })
    },
    // search result
    'fetch_search_list' ({commit}, params) {
      axios
      .get('', { ...params })
      .then((res) => {
        commit('toggle_search_list', res.data)
      })
    }
  },
  mutations: {
    'toggle_home_list' (state,res) {
      state.home = res
    },
    'toggle_search_list' (state, res) {
      state.search = res
    }
  }
}
export default home