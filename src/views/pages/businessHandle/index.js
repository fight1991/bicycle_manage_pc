export default {
  icon: 'icon-power',
  path: '/bus/business',
  name: 'bus-business',
  // hidden: true,
  meta: {
    permission: [1, 2, 3, 255],
    title: '业务办理'
  },
  children: [
    {
      path: '/bus/business/record',
      name: 'bus-data-record',
      meta: {
        permission: [2, 3, 255],
        title: '备案审核',
        component: () => import(/* webpackChunkName: "bus-business-record" */ './listDemo1')
      }
    }, {
      path: '/bus/business/change',
      name: 'bus-business-change',
      meta: {
        permission: [1, 2, 3, 255],
        title: '备案人变更',
        component: () => import(/* webpackChunkName: "bus-business-change" */ './listDemo2')
      }
    }, {
      path: '/bus/business/scrap',
      name: 'bus-business-scrap',
      meta: {
        permission: [1, 2, 3, 255],
        title: '报废审核',
        component: () => import(/* webpackChunkName: "bus-business-scrap" */ '@/views/pages/listDemo')
      }
    }
  ]
}
