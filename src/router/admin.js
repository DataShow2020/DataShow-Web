export default [
  {
    path: '/admin',
    component: () => import('../packages/ui/container'),
    children: [{
      path: '/',
      name: 'admin',
      component: () => import('../view/evaluate/evaluate'),
    }, {
      path: 'vehicle',
      name: 'vehicle',
      component: () => import('../view/vehicle/vehicle'),
    },{
      path: 'addVehicle',
      name: 'addVehicle',
      component: () => import('../view/vehicle/addVehicle'),
    }, {
      path: 'orderManage',
      name: 'orderManage',
      component: () => import('../view/orderManage/OrderManage'),
    }, {
      path: 'addOrder',
      name: 'addOrder',
      component: () => import('../view/orderManage/addOrder'),
    },{
      path: 'editOrder',
      name: 'editOrder',
      component: () => import('../view/orderManage/editOrder'),
    },
      {
        path: 'addOrder',
        name: 'addOrder',
        component: () => import('../view/orderManage/addOrder')
      },{
      path: 'lookOrder',
      name: 'lookOrder',
      component: () => import('../view/orderManage/lookOrder'),
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
      path: 'employee',
      name: 'employee',
      component: () => import('../view/employee/index')
    }, {
      path: 'addEmployee',
      name: 'addEmployee',
      component: () => import('../view/employee/addEmployee')
    }, {
      path: 'editEmployee',
      name: 'editEmployee',
      component: () => import('../view/employee/editEmployee')
    }, {
      path: 'employee',
      name: 'employee',
      component: () => import('../view/employee/index')
    }, {
      path: 'addEmployee',
      name: 'addEmployee',
      component: () => import('../view/employee/addEmployee')
    }, {
      path: 'editEmployee',
      name: 'editEmployee',
      component: () => import('../view/employee/editEmployee')
    }, {
      path: 'lookEmployee',
      name: 'lookEmployee',
      component: () => import('../view/employee/lookEmployee')
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
  }, {
    path: '/CustomerService',
    name: 'CustomerService',
    component: () => import('../view/static/CustomerService')
  }, {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../view/static/aboutUs')
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../view/home')
  }
]
