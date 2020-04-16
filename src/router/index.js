import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/home')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/home')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../view/register/register')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('../view/show/index')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../packages/ui/errorPage/404.vue')
    },
    {
      path: '*',
      name: 'err',
      redirect: '404'
    },
  ]
})
