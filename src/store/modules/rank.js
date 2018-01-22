import axios from '@/utils/axios_config.js'
const rank = {
	state : {
    rankData: []
  },
	getters : {
    'DONE_RANKDATA': state => state.rankData
  },
	actions : {
    'FETCH_RANKDATA' ({commit}, pageIndex) {
      console.log(pageIndex)
      let _url = `../../../static/mock/rank.json`
      if (pageIndex == 1) {
        _url = '../../../static/mock/rank2.json'
      }
      return new Promise((resolve, reject) => {
        axios.get(_url)
            .then(res => {
              commit('TOGGLE_RANKDATA', res.data.records)
              resolve()
            })
      })
    }
  },
	mutations : {
    'TOGGLE_RANKDATA' (state, payload) {
      state.rankData = state.rankData.concat(payload)
    }
  }
}

export default rank
