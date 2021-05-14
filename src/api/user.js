// 用户相关api
import { $post_user as $post, $post_business as $businesss } from '@/net/netInit'

// 退出登录
export const loginOut = (data) => {
  return $businesss({
    url: '/user-center/logout',
    data
  })
}
// 登录
export const goLogin = (data) => {
  return $post({
    url: '/data-user/loginByUserName',
    data
  })
}
// 创建账号
export const createAccount = (data) => {
  return $post({
    url: '/data-user/addUserName',
    data
  })
}
// 个人信息 个人详情 查询
export const getUserInfo = (data) => {
  return $post({
    url: '/data-user/user/getUserByToken',
    data: localStorage.getItem('token')
  })
}
// 修改密码
export const changePassword = (data) => {
  return $post({
    url: '/data-user/user/changePassword',
    data
  })
}
// 查询权限
export const getPermissons = (data) => {
  return $post({
    url: '/data-user/user/getUserViews',
    data
  })
}
