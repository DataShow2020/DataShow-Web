export default [
  {
    path: '/admin',
    component: () => import('../packages/ui/container'),
    children: [{
      path: '/',
      name: 'admin',
      component: () => import('../view/evaluate/evaluate'),
    },{
      path: 'vehicle',
      name: 'vehicle',
      component: () => import('../view/vehicle/vehicleApi'),
      },{
        path: '/orderManage',
        name: 'orderManage',
        component: () => import('../view/orderManage/OrderManage'),
      },{
        path: '/addOrder',
        name: 'addOrder',
        component: () => import('../view/orderManage/addOrder'),
      }]
  }
]
