export default {
  icon: 'icon-yewupeizhi',
  path: '/bus/businessD',
  name: 'bus-businessD',
  hidden: true,
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
    }
  ]
}
