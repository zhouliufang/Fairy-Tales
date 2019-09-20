import Vue from 'vue'
import Router from 'vue-router'

import MainHello from '@/components/MainHello';
import MainTask from '@/components/task/MainTask';
import TaskDetail from '@/components/task/TaskDetail';
import HistoryTask from '@/components/task/HistoryTask';
import Menu from '@/components/menu/menu';
import GuestMenu from '@/components/menu/guestMenu';
import PersonalInfo from '@/components/personalInfo/personalInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {//登录页面
      path: '/',
      name: 'MainHello',
      component: MainHello
    },
    {//主任务界面
      path: '/MainTask',
      name: 'MainTask',
      component: MainTask
    },
    {//任务详情
      path: '/TaskDetail',
      name: 'TaskDetail',
      component: TaskDetail
    },
    {//历史任务
      path: '/HistoryTask',
      name: 'HistoryTask',
      component: HistoryTask
    },
    {//菜单主页
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {//游客主页
      path: '/GuestMenu',
      name: 'GuestMenu',
      component: GuestMenu
    },
    {//个人信息
      path: '/PersonalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
  ]
})
