import axios from 'axios'
import interceptors from './interceptors'
import { requestFunc, allFunc } from './netUtils'
let {
  onRequestResolve,
  onRequestReject,
  onResponseResolve,
  onResponseReject
} = interceptors

/* eslint-disable */
// axios构造实例类
class InitAxios {
  constructor (baseURL) {
    this.instance = axios.create({
      // 开发环境中以/api开头的接口需要设置代理
      baseURL: process.env.NODE_ENV === 'development' ? '/api' : baseURL,
      timeout: 15000
    })
    this.instance.interceptors.request.use(onRequestResolve, onRequestReject)
    this.instance.interceptors.response.use(onResponseResolve, onResponseReject)
  }
}

// 配置get/post等请求实例
const Fetch_COMMON = new InitAxios(process.env.VUE_APP_API)['instance']
const Fetch_UPLOAD = new InitAxios(process.env.VUE_APP_FILE)['instance']

// 初始化get方法
const getInstance =  (url, data) => {
  return Fetch_COMMON['get'](url, { params: data })
}
// 初始化post方法
const postInstance = (url, data) => {
  return Fetch_COMMON['post'](url, data)
}
// 初始化upload方法
const uploadInstance = (url, data) => {
  return Fetch_UPLOAD['post'](url, data, { headers: { 'Content-Type': 'multipart/form-data' } })
}
// 初始化批量请求all方法
const allInstance = (data) => {
  return Promise.all(data)
}

export const $get = ({ url, data, isLoad, globalLoading }) => {
  return requestFunc({ url, data, isLoad, globalLoading, func: getInstance })
}
export const $post = ({ url, data, isLoad, globalLoading }) => {
  return requestFunc({ url, data, isLoad, globalLoading, func: postInstance })
}
export const $upload = ({ url, data, isLoad, globalLoading }) => {
  return requestFunc({ url, data, isLoad, globalLoading, func: uploadInstance })
}
export const $all = ({ data, isLoad, globalLoading }) => {
  // data数据类型为 List<Promise>
  return allFunc({ data, isLoad, globalLoading, func: allInstance })
}
