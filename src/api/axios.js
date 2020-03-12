// 引入axios 
import axios from 'axios'
import qs from 'qs'
import {
  Toast
} from 'vant'

const baseURL = '/api' // 公共请求头
const timeout = 20000// 请求超时时间

const axiosInstance = axios.create({
  baseURL,
  timeout
})
// 请求拦截器
axiosInstance.interceptors.request.use(config => {

  // 解构获取method data
  const {
    method,
    data
  } = config
  // 对post请求进行处理
  if (method.toUppercase === 'POST' && data instanceof Object) {
    // 把data转换为urlEncoding形式
    config.data = qs.stringify(data)
  }
  // 返回config
  return config
})

// 响应拦截器
axiosInstance.interceptors.response.use(response => {
  return response.data
}, error => {
  Toast(error)
  console.log(error.message);
  
  return new Promise(() => {

  })
})

// 暴露
export default axiosInstance