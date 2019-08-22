import Vue from 'vue'
import Router from 'vue-router'

import MainHello from '@/components/MainHello';
import MainTask from '@/components/task/MainTask';
import TaskDetail from '@/components/task/TaskDetail';
import HistoryTask from '@/components/task/HistoryTask';


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
    {
      path: '/TaskDetail',
      name: 'TaskDetail',
      component: TaskDetail
    },
    {
      path: '/HistoryTask',
      name: 'HistoryTask',
      component: HistoryTask
    },
  ]
})
