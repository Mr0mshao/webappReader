import axios from '../../utils/axios_config'
const book = {
  state: {
    bookInfo: {},
  },
  getters: {
    'DONE_BOOKINFO': state => state.bookInfo,
  },
  actions: {
    'FETCH_BOOKINFO' ({commit}, bookId) {
      axios.get('../../../static/mock/book/bookInfo.json')
          .then(res => {
            commit('TOGGLE_BOOKINFO', res.data)
          })
    }
  },
  mutations: {
    'TOGGLE_BOOKINFO' (state, payload) {
      state.bookInfo = payload
    }
  }
}
export default book
