import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);




export default new Vuex.Store({
    state: {
        role:'',
    },
    mutations: {//更改state
        setRole(state,role){
            state.role = role ;
        }
    },
    getters: {//可对state里的数据做处理并缓存结果

    },
    actions: {//提交mutation 可包含异步操作
        setRoleAction({commit},role){
            commit('setRole', role);
        }
    },
    // moudles: {

    // }
});