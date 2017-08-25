import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App';

import Login from '@/components/login'

import Details from '@/components/home/details'

import CheckDetail from '@/components/home/check_detail'

import Rectify from '@/components/home/rectify'
import RectifyEdit from '@/components/home/rectify_edit'

import Accept from '@/components/home/accept'
import Involution from '@/components/home/involution'
import InvolutionDetail from '@/components/home/involution_detail'

import Detail from '@/components/mine/detail'
import Record from '@/components/mine/record'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'login',
          component: Login
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
          path: 'rectify',
          name: 'rectify',
          component: Rectify
        },
        {
          path: 'rectify_edit',
          name: 'rectify_edit',
          component: RectifyEdit
        },
        {
          path: 'accept',
          name: 'accept',
          component: Accept
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
        {
          path: 'record',
          name: 'record',
          component: Record
        }
      ]

    }
    
  ]
})
