/*
 * @Author: mr.mshao 
 * @Date: 2018-01-22 15:46:40 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-01-22 16:18:08
 * 首页
 */

import axios from '@/utils/axios_config.js'
const home = {
  state: {
    pageDate: {}
  },
  getters: {
    'DONE_PAGEDATA': state => state.pageDate
  },
  actions: {
    'FETCH_PAGEDATA' ({commit}) {
      axios.get('../../../static/mock/home.json')
        .then(res => {
          commit('TOGGLE_PAGEDATA', res.data)
        })
    }
  },
  mutations: {
    'TOGGLE_PAGEDATA' (state, payload) {
      state.pageDate = payload
    }
  }
}
export default home