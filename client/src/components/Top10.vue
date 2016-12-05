<template>
    <div>
    <h1>{{header}}</h1>
        <ul>
            <li v-for="topic in topics">{{topic.title}}</li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    import {store} from '../store'  // 只要store在声明Vue实例的时候注入到根组件，子组件就可以通过这样使用store
    import { mapGetters } from 'vuex'

    export default{
        name:'Top10',
        data:()=>{return {header:"top10"}},
        created(){
            let self = this
            console.log('top10 created',this.$store);
            axios.get('http://localhost/hot/topten').then((res)=>{
                const topics = JSON.parse(res.data).topics
                store.commit({ // commit 的参数有多种形式，详见文档
                    type:'GetTop10',
                    topics
                })
                
            })
        },
        computed:{
            ...mapGetters(['topics'])
        }
    }
</script>
<style lang="stylus">
    li
        font-size:20px;

</style>