import Vue from 'vue'
import Router from 'vue-router'
import MainHello from '@/components/MainHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainHello',
      component: MainHello
    }
  ]
})
