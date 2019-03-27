import Vue from 'vue'
import Router from 'vue-router'

import moreList from '../components/more/moreList.vue';
import mainHello from '../components/mainHello.vue';
import setUserInfo from '../components/setting/setUserInfo.vue';

Vue.use(Router);

export default new Router({
    routes: [
        //主页面
        {
            path: '/',
            name: 'mainHello',
            meta: {
                heightName: 'mainHello',
            },
            components: {
                default: mainHello,
            },
        },
        {
            path: '/moreList',
            name: 'moreList',
            meta: {
                heightName: 'moreList',
            },
            components: {
                default: moreList,
            },
        },
        {
            path: '/setUserInfo',
            name: 'setUserInfo',
            meta: {
                heightName: 'setUserInfo',
            },
            components: {
                default: setUserInfo,
            },
        },
    ],
       
})


/* import moreList from '../components/more/moreList.vue';
import VueRouter from 'vue-router';


//定义路由
const routes = [
    {path:'/moreList',component:moreList},
];

//创建实例，传routes实例
const router = new VueRouter({
    routes  // or  routes:rouets
})


//创建和挂载根实例
const mainHello = new Vue({
    router
}).$mount('#app') */
