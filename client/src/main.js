import Vue from 'vue'
import VueRouter from 'vue-router'
import {store} from './store'   // 没有export default 的导出导入时要加上{}

Vue.use(VueRouter)
/* eslint-disable no-new */
const Top10 = resolve =>{
  require.ensure(['./components/Top10.vue'],()=>{
    resolve(require('./components/Top10.vue'))
  })
}

const Topic = resolve=>{
  require.ensure(['./components/Topic.vue'],()=>{
    resolve(require('./components/Topic.vue'))
  },'boardtopic')
}

const Board = resolve=>{
  require.ensure(['./components/Board.vue'],()=>{
    resolve(require('./components/Board.vue'))
  },'boardtopic')
}
//  定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: Top10 },
  { path:'/board/:board/',component:Board,name:'board',},
  { path:'/topic/:board/:id',component:Topic,name:'topic',
    beforeEnter: (to, from, next) => {
        // 清除先前的数据
        store.commit('clearTopic')
        next();
      }}
]

//  创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export  const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

//  创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  store,
  router,
  created: function () {
    // `this` 指向 vm 实例
  }
}).$mount('#app')

// 现在，应用已经启动了！