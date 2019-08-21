import Vue from 'vue'
import Router from 'vue-router'

import MainHello from '@/components/MainHello';
import MainTask from '@/components/task/MainTask';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainHello',
      component: MainHello
    },
    {
      path: '/MainTask',
      name: 'MainTask',
      component: MainTask
    },
  ]
})
