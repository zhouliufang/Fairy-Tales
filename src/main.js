import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

//进入页面前校验权限
// router.beforeEach((to,from,next) => {
//   console.log('to-----',to);
//   console.log('from-----',from);
//   console.log('next-----',next);
//   let roleCode = store.state.role ;
//   if(to.path !== '/' ){//页面需要权限
    

//   }else{
//     next();
//   }
// });




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store : store,
  render: h => h(App)
})
