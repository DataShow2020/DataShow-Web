export default [
  {
    path: '/admin',
    component: () => import('../packages/ui/container'),
    children: [{
      path: '/ShowIndex',
      name: 'ShowIndex',
      component: () => import('../view/show/ShowIndex')

    }
    ]
  }
]
