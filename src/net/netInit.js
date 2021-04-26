import axios from 'axios'
import interceptors from './interceptors'
import { requestFunc, allFunc } from './netUtils'
let {
  onRequestResolve,
  onRequestReject,
  onResponseResolve,
  onResponseReject
} = interceptors

// 入参统一包装
const paramsPack = (data) => {
  return {
    accessType: 'pc',
    data
  }
}

/* eslint-disable */
// axios构造实例类
class InitAxios {
  constructor (baseURL, proxyHead) {
    this.instance = axios.create({
      // 开发环境中以/api开头的接口需要设置代理
      baseURL: process.env.NODE_ENV === 'development' ? proxyHead : baseURL,
      timeout: 15000
    })
    this.instance.interceptors.request.use(onRequestResolve, onRequestReject)
    this.instance.interceptors.response.use(onResponseResolve, onResponseReject)
  }
}

// 配置get/post等请求实例
// 用户相关
const Fetch_USER = new InitAxios(process.env.VUE_APP_USER_API, '/api/user')['instance']
// 车辆相关
const Fetch_BUSINESS = new InitAxios(process.env.VUE_APP_USER_BUSINESS, '/api/business')['instance']
// 上传
const Fetch_UPLOAD = new InitAxios(process.env.VUE_APP_FILE, '/api/file')['instance']

// 初始化post方法
const userPostInstance = (url, data) => {
  return Fetch_USER['post'](url, paramsPack(data))
}
const businessPostInstance = (url, data) => {
  return Fetch_BUSINESS['post'](url, paramsPack(data))
}
// 初始化upload方法
const uploadInstance = (url, data) => {
  return Fetch_UPLOAD['post'](url, paramsPack(data), { headers: { 'Content-Type': 'multipart/form-data' } })
}
// 初始化批量请求all方法
const allInstance = (data) => {
  return Promise.all(paramsPack(data))
}

export const $post_user = ({ url, data, isLoad, globalLoading }) => {
  return requestFunc({ url, data, isLoad, globalLoading, func: userPostInstance })
}
export const $post_business = ({ url, data, isLoad, globalLoading }) => {
  return requestFunc({ url, data, isLoad, globalLoading, func: businessPostInstance })
}
export const $upload = ({ url, data, isLoad, globalLoading }) => {
  return requestFunc({ url, data, isLoad, globalLoading, func: uploadInstance })
}
export const $all = ({ data, isLoad, globalLoading }) => {
  // data数据类型为 List<Promise>
  return allFunc({ data, isLoad, globalLoading, func: allInstance })
}
