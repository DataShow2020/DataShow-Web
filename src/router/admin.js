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
    }, {
      path: 'totalCountIndex',
      name: '统计页面',
      component: () => import('../view/show/totalCount/index')
    }
    ]
  }
]
