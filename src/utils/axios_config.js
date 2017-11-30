import Qs from 'qs'
import axios from 'axios'
import store from '@/store/index.js'
axios.defaults.baseURL = ''
axios.defaults.timeout = 5000
axios.defaults.transformRequest = [function (data) {
  return Qs.stringify(data)
}]

axios.interceptors.request.use((config)=>{
  return config
}, (err)=>{
  return new Promise.reject(err)
})

axios.interceptors.response.use((response)=>{
  return response.data
}, (err)=>{
  console.log(err)
  return new Promise.reject(err)
})

export default axios