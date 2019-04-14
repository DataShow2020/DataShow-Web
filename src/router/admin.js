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
    }
    ]
  }
]
