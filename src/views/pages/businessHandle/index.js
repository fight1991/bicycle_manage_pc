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
        component: () => import(/* webpackChunkName: "bus-businessH-record" */ './listDemo1')
      }
    }, {
      path: '/bus/businessH/change',
      name: 'bus-businessH-change',
      meta: {
        permission: [1, 2, 3, 255],
        title: '备案人变更',
        component: () => import(/* webpackChunkName: "bus-businessH-change" */ './listDemo2')
      }
    }, {
      path: '/bus/businessH/scrap',
      name: 'bus-businessH-scrap',
      meta: {
        permission: [1, 2, 3, 255],
        title: '报废审核',
        component: () => import(/* webpackChunkName: "bus-businessH-scrap" */ '@/views/pages/listDemo')
      }
    }
  ]
}
