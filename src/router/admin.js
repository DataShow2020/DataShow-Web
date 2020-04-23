export default [
  {
    path: '/admin',
    component: () => import('../packages/ui/container'),
    children: [{
      path: '/',
      name: 'admin',
      component: () => import('../view/show/ShowIndex')
    },
      {
        path: 'ShowModel',
        name: '模型展示',
        component: () => import('../view/show/ShowModel')
      }
    ]
  }
]
