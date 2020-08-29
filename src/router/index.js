import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../components/Login')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../components/Home'),
      children:[
          {
          path:'wenti',
          name:'Wenti',
          component: () => import('../components/Wenti'),
        },
          {
          path:'wenzhang',
          name:'Wenzhang',
          component: () => import('../components/Wenzhang'),
        },
        {
          path:'yuan',
          name:'Yuan',
          component: () => import('../components/Yuan'),
        },
        {
          path:'personal',
          name:'Personal',
          component: () => import('../components/Personal'),
        },
        {
          path:'updpwd',
          name:'Updpwd',
          component: () => import('../components/Updpwd'),
        },
        {
          path:'user',
          name:'User',
          component: () => import('../components/User'),
        },
        {
          path: '/emp',
          name: 'Emp',
          component: () => import('../components/employee')
        },
        {
          path: '/account',
          name: 'Account',
          component: () => import('../components/Account')
        }
      ]
    },
    {
      path:'/shuangy',
      name:'Shuangy',
      component: () => import('../components/Shuangy'),
    }
  ]
})
