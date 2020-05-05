import axios from '../../utils/axios_config'
const book = {
  state: {
    bookInfo: {},
    reader: null
  },
  getters: {
    'DONE_BOOKINFO': state => state.bookInfo,
    'DONE_READER': state => state.reader
  },
  actions: {
    'FETCH_BOOKINFO' ({commit}, bookId) {
      axios.get('../../../static/mock/book/bookInfo.json')
          .then(res => {
            commit('TOGGLE_BOOKINFO', res.data)
          })
    },
    'FETCH_READER' ({commit}, bookId) {
      axios.get('../../../static/mock/book/chapter-1.json')
          .then(res => {
            commit('TOGGLE_READER', res.data)
          })
    }
  },
  mutations: {
    'TOGGLE_BOOKINFO' (state, payload) {
      state.bookInfo = payload
    },
    'TOGGLE_READER' (state, payload) {
      state.reader = payload
    },
  }
}
export default book
