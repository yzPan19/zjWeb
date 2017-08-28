import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App';

import Login from '@/components/login'
import Login2 from '@/components/login2'
import Root from '@/components/root'

import Details from '@/components/home/details'

import CheckDetail from '@/components/home/check_detail'



import Involution from '@/components/home/involution'
import InvolutionDetail from '@/components/home/involution_detail'

import Detail from '@/components/mine/detail'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'login',
          component: Login
      },
      {
        path: '/login2',
        name: 'login2',
        component: Login2
    },
    {
      path: '/root',
      name: 'root',
      component: Root
    },
    {
      path: '/home',
      component: App,
      children:[
        
        {
          path: 'details',
          name: 'details',
          component: Details
        },
        {
          path: 'check_detail',
          name: 'check_detail',
          component: CheckDetail
        },
        {
          path: 'involution',
          name: 'involution',
          component: Involution
        },
        {
          path: 'involution_detail',
          name: 'involution_detail',
          component: InvolutionDetail
        },
      ]

    },
    {
      path: '/mine',
      component: App,
      children:[
        {
          path: 'detail',
          name: 'detail',
          component: Detail
        },
      ]

    }
    
  ]
})
