import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)

export  const store = new Vuex.Store({
    state:{
        top10Topics:[]
    },
    getters:{
        topics:state=>state.top10Topics
    },
    mutations:{
        ['GetTop10'](state,paload){
            state.top10Topics = paload.topics
        }
    },
    
})