export default {
  path: '/bus/index',
  hidden: true,
  name: 'tab-index',
  meta: {
    permission: [1, 2, 3, 255],
    title: '首页',
    component: () => import(/* webpackChunkName: "home" */ '@/views/pages/home/index.vue')
  }
}
