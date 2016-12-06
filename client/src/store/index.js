import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)  // 必须在创建store实例的时候先install vuex

export  const store = new Vuex.Store({
    state:{
        top10Topics:[], // 十大话题
        Topic:[],      //一篇具体的帖子及回复
        Board:[], //板块信息
    },
    getters:{
        topics:state=>state.top10Topics,  // topics作为state.top10Topics的别名
        Topic:state=>state.Topic,
        Board:state=>state.Board
    },
    mutations:{
        ['GetTop10'](state,payload){     //定义mutation handler
            state.top10Topics = payload.topics
        },
        ['GetTopic'](state,payload){
            state.Topic = payload.topics
        },
        ['GetBoard'](state,payload){
            state.Board = payload.topics
        },
        ['clearTopic'](state){
            state.Topic = []
        }
    },
    
})