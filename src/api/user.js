// 用户相关api
import { $post_user as $post, $post_business as $businesss } from '@/net/netInit'

// 退出登录
export const loginOut = (data) => {
  return $businesss({
    url: '/user-center/manage-login/logout',
    data
  })
}
// 登录
export const goLogin = (data) => {
  return $businesss({
    url: '/user-center/manage-login/loginByUserName',
    data
  })
}
// 个人信息 个人详情 查询
export const getUserInfo = (data) => {
  return $businesss({
    url: '/user-center/manage-user/getUserInfo',
    data
  })
}
// 个人信息 基础信息查询 传入uid
export const getBasicUserInfo = (data) => {
  return $businesss({
    url: '/user-center/personal/getBasicInfo',
    data
  })
}
// 修改密码
export const changePassword = (data) => {
  return $post({
    url: '/user-center/manage-user/changePassword',
    data
  })
}
// 查询权限
export const getPermissons = (data) => {
  return $businesss({
    url: '/user-center/manage-user/getUserViews',
    data
  })
}
