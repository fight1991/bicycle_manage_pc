// 用户相关api
import { $post } from '@/net/netInit'

// 退出登录
export const loginOut = (data) => {
  return $post({
    url: '/battery-car-management/operator/token/delete',
    data
  })
}
// 登录
export const goLogin = (data) => {
  return $post({
    url: '/battery-car-management/operator/token/get',
    data
  })
}
// 创建账号
export const createAccount = (data) => {
  return $post({
    url: '/battery-car-management/operator/token/post',
    data
  })
}
// 个人信息 个人详情 查询
export const getUserInfo = (data) => {
  return $post({
    url: '/battery-car-management/operator/personal/detail',
    data
  })
}
// 修改密码
export const changePassword = (data) => {
  return $post({
    url: '/battery-car-management/operator/token/edit',
    data
  })
}
