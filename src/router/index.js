import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/packages/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../view/register/register')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../packages/ui/errorPage/404.vue')
    },
    {
      path: '*',
      name: 'err',
      redirect: '404',
    },
  ]
})
