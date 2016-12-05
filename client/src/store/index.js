import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)  // 必须在创建store实例的时候先install vuex

export  const store = new Vuex.Store({
    state:{
        top10Topics:[]
    },
    getters:{
        topics:state=>state.top10Topics  // topics作为state.top10Topics的别名
    },
    mutations:{
        ['GetTop10'](state,paload){     //定义mutation handler
            state.top10Topics = paload.topics
        }
    },
    
})