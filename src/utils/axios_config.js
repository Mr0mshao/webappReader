import Qs from 'qs'
import axios from 'axios'
import store from '@/store/index.js'
axios.defaults.baseURL = ''
axios.defaults.timeout = 5000
axios.defaults.transformRequest = [function (data) {
  return Qs.stringify(data)
}]

axios.interceptors.request.use((config)=>{
  store.commit('TOGGLE_ISLOADING', true)
  return config
}, (err)=>{
  return new Promise.reject(err)
})

axios.interceptors.response.use((response)=>{
  setTimeout(() => {
    store.commit('TOGGLE_ISLOADING', false)
  }, 700)
  return response.data
}, (err)=>{
  console.log(err)
  return new Promise.reject(err)
})

export default axios