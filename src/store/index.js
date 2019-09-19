import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);




const store = new Vuex.Store({
    state: {
        role:'',
    },
    mutations: {//更改state
        setRole(state,role){
            state.role = role ;
        }
    },
    getter: {//可对state里的数据做处理并缓存结果

    },
    actions: {//提交mutation 可包含异步操作

    },
    // moudles: {

    // }
});

export default({
    store
});