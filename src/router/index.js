import Vue from 'vue'
import Router from 'vue-router'
import admin from './admin'

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
      path: '/login',
      name: 'login',
      component: () => import('../view/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../view/register/register')
    },
    // {
    //   path: '/orderManage',
    //   name: 'orderManage',
    //   component: () => import('../view/orderManage/orderManage')
    // },
    {
      path: '/404',
      name: '404',
      component: () => import('../packages/ui/errorPage/404.vue')
    },
    {
      path: '/logisticsConsult',
      name: 'logisticsConsult',
      component: () => import('../view/client/logisticsConsult/index')
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: () => import('../view/client/logisticsConsult/searchResult')
    },
    {
      path: '/onlineOrder',
      name: 'onlineOrder',
      component: () => import('../view/client/onlineOrder/index')
    },
    ...admin,
    {
      path: '*',
      name: 'err',
      redirect: '404'
    },
    {
      path: '/indexStation',
      name: '/indexStation',
      component: () => import('../view/station/indexStation')

    }
  ]
})
