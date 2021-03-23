export default {
  icon: 'icon-power',
  path: '/bus/businessH',
  name: 'bus-businessH',
  // hidden: true,
  meta: {
    permission: [1, 2, 3, 255],
    title: '业务办理'
  },
  children: [
    {
      path: '/bus/businessH/record',
      name: 'bus-businessH-record',
      meta: {
        permission: [2, 3, 255],
        title: '备案审核',
        component: () => import(/* webpackChunkName: "bus-businessH-record" */ '@/views/pages/businessHandle/recordList')
      }
    }, {
      path: '/bus/businessH/recordCheck',
      name: 'bus-businessH-recordCheck',
      hidden: true,
      meta: {
        permission: [2, 3, 255],
        title: '备案审核详情',
        component: () => import(/* webpackChunkName: "bus-businessH-recordCheck" */ '@/views/pages/businessHandle/recordCheck')
      }
    }, {
      path: '/bus/businessH/change',
      name: 'bus-businessH-change',
      meta: {
        permission: [1, 2, 3, 255],
        title: '备案人变更',
        component: () => import(/* webpackChunkName: "bus-businessH-change" */ '@/views/pages/businessHandle/changeList')
      }
    }, {
      path: '/bus/businessH/changeCheck',
      name: 'bus-businessH-changeCheck',
      hidden: true,
      meta: {
        permission: [1, 2, 3, 255],
        title: '备案人变更审核',
        component: () => import(/* webpackChunkName: "bus-businessH-changeCheck" */ '@/views/pages/businessHandle/changeCheck')
      }
    }, {
      path: '/bus/businessH/scrap',
      name: 'bus-businessH-scrap',
      meta: {
        permission: [1, 2, 3, 255],
        title: '报废审核',
        component: () => import(/* webpackChunkName: "bus-businessH-scrap" */ '@/views/pages/businessHandle/scrapList')
      }
    }, {
      path: '/bus/businessH/scrapCheck',
      name: 'bus-businessH-scrapCheck',
      hidden: true,
      meta: {
        permission: [1, 2, 3, 255],
        title: '报废审核详情',
        component: () => import(/* webpackChunkName: "bus-businessH-scrapCheck" */ '@/views/pages/businessHandle/scrapCheck')
      }
    }
  ]
}
