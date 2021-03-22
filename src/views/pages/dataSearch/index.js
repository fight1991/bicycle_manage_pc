export default {
  icon: 'icon-power',
  path: '/bus/data',
  name: 'bus-data',
  // hidden: true,
  meta: {
    permission: [1, 2, 3, 255],
    title: '数据查询'
  },
  children: [
    {
      path: '/bus/data/bicycle',
      name: 'bus-data-bicycle',
      meta: {
        permission: [2, 3, 255],
        title: '电动自行车查询',
        component: () => import(/* webpackChunkName: "bus-data-bicycle" */ '@/views/pages/dataSearch/list')
      }
    }, {
      path: '/bus/data/detail',
      name: 'bus-data-detail',
      hidden: true,
      meta: {
        permission: [1, 2, 3, 255],
        title: '电动自行车详情',
        component: () => import(/* webpackChunkName: "bus-data-bicycleDetail" */ '@/views/pages/dataSearch/detail')
      }
    }
  ]
}
