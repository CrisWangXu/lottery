import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home'

// 11选5
import ShiyixuanwuIndex from '@/view/shiyixuanwu/index'
import ShiyixuanwuResult from '@/view/shiyixuanwu/result'

// 排列3
import PailiesanIndex from '@/view/pailiesan/index'
import PailiesanResult from '@/view/pailiesan/result'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/shiyixuanwu/index',
    	name: 'shiyixuanwuIndex',
    	component: ShiyixuanwuIndex
    },
    {
    	path: '/shiyixuanwu/result',
    	name: 'shiyixuanwuResult',
    	component: ShiyixuanwuResult
    },
    {
      path: '/pailiesan/index',
      name: 'pailiesanIndex',
      component: PailiesanIndex
    },
    {
      path: '/pailiesan/result',
      name: 'pailiesanResult',
      component: PailiesanResult
    },
  ]
})
