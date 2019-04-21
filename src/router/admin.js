export default [
  {
    path: '/admin',
    component: () => import('../packages/ui/container'),
    children: [{
      path: '/',
      name: 'admin',
      component: () => import('../view/evaluate/evaluate')
    }, {
      path: 'vehicle',
      name: 'vehicle',
      component: () => import('../view/vehicle/vehicle')
    }, {
      path: 'orderManage',
      name: 'orderManage',
      component: () => import('../view/orderManage/OrderManage')
    }, {
      path: 'addOrder',
      name: 'addOrder',
      component: () => import('../view/orderManage/addOrder')
    }, {
      path: 'station',
      name: '站点管理',
      component: () => import('../view/station/indexStation')
    }, {
      path: 'editStation',
      name: '站点编辑',
      component: () => import('../view/station/editStation')
    }, {
      path: 'detailStation',
      name: '站点详情',
      component: () => import('../view/station/detailStation')
    }, {
      path: 'plusStation',
      name: '站点新增',
      component: () => import('../view/station/plusStation')
    }, {
      path: 'distribution',
      name: '配送点管理',
      component: () => import('../view/distribution/index')
    }, {
      path: 'detailDistribution',
      name: '配送点详情',
      component: () => import('../view/distribution/detailDistribution')
    }, {
      path: 'plusDistribution',
      name: '配送点新增',
      component: () => import('../view/distribution/plusDistribution')
    }, {
      path: 'editDistribution',
      name: '配送点编辑',
      component: () => import('../view/distribution/editDistribution')
    }
    ]
  }
]
