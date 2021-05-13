export default {
  icon: 'icon-yewupeizhi',
  path: '/bus/businessD',
  name: 'bus-businessD',
  hidden: false,
  meta: {
    permission: [1, 2, 3, 255],
    title: '业务配置'
  },
  children: [
    {
      path: '/bus/businessD/installer',
      name: 'bus-businessD-installer',
      meta: {
        permission: [2, 3, 255],
        title: '安装员配置',
        component: () => import(/* webpackChunkName: "bus-businessD-installer" */ './installerList')
      }
    }, {
      path: '/bus/businessD/corpList',
      name: 'bus-businessD-corpList',
      meta: {
        permission: [2, 3, 255],
        title: '民生企业管理',
        component: () => import(/* webpackChunkName: "bus-businessD-corpList" */ './corpList')
      }
    }
  ]
}
