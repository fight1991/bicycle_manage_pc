// 审核相关api
import { $post_business as $post } from '@/net/netInit'

// 备案人变更 - 审核
export const changeCheck = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/ownership_change/change_status',
    data
  })
}
// 备案人变更 - 详情
export const changeDetail = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/ownership_change/detail',
    data
  })
}
// 备案人变更 - 列表
export const changeList = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/ownership_change/list',
    data
  })
}
// 备案申报 - 审核
export const recordCheck = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/record_filing/change_status',
    data
  })
}
// 备案申报 - 详情
export const recordDetail = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/record_filing/detail',
    data
  })
}
// 备案申报 - 列表
export const recordList = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/record_filing/list',
    data
  })
}
// 报废审核
export const scrapCheck = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/scrap/change_status',
    data
  })
}
// 报废详情
export const scrapDetail = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/scrap/detail',
    data
  })
}
// 报废审核列表
export const scrapList = (data) => {
  return $post({
    url: '/battery-car-management/operator/audit/scrap/list',
    data
  })
}
// 电动自行车查询
export const vehicleList = (data) => {
  return $post({
    url: '/battery-car-management/operator/vehicle/list',
    data
  })
}
// 电动自行车详情
export const vehicleDetail = (data) => {
  return $post({
    url: '/battery-car-management/operator/vehicle/detail',
    data
  })
}
// 安装员配置相关api
// 安装员删除
export const operatorDelete = (data) => {
  return $post({
    url: '/battery-car-management/operator/delete',
    data
  })
}

// 安装员模糊查询
export const operatorQuery = (data) => {
  return $post({
    url: '/battery-car-management/operator/fuzzy_query',
    isLoad: false,
    data
  })
}
// 安装员列表
export const operatorList = (data) => {
  return $post({
    url: '/battery-car-management/operator/list',
    data
  })
}
// 安装员添加
export const operatorAdd = (data) => {
  return $post({
    url: '/battery-car-management/operator/post',
    data
  })
}
