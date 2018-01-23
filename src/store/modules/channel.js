/*
 * @Author: mr.mshao 
 * @Date: 2018-01-23 09:58:54 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-01-23 10:06:03
 */
import axios from '../../utils/axios_config'
const channel = {
  state: {
    female: [],
    male: []
  },
  getters: {
    'DONE_FEMALE': state => state.female,
    'DONE_MALE': state => state.male,
  },
  actions: {
    'FETCH_FEMALE' ({commit}) {
      axios.get('../../../static/mock/female.json')
            .then(res => {
              commit('TOGGLE_FEMALE', res.data)
            })
    },
    'FETCH_MALE' ({commit}) {
      axios.get('../../../static/mock/male.json')
            .then(res => {
              commit('TOGGLE_MALE', res.data)
            })
    }
  },
  mutations: {
    'TOGGLE_FEMALE' (state, payload) {
      state.female = payload
    },
    'TOGGLE_MALE' (state, payload) {
      state.male = payload
    }
  }
}
export default channel
