<template>
    <div>
        <h1>{{header}}</h1>
        <ul>
            <li v-for="topic in Topic">{{topic.author}}--{{topic.content}}</li>
        </ul>
        </div>
</template>

<script>
    import axios from 'axios'
    import {router} from '../main'
    import {proxyUrl} from '../config'
    import {store} from '../store'
    import { mapGetters } from 'vuex'
    export default {
        data:()=>{
            return {
                header:'topic'
            }
        },
        name:'topic',
        created(){
            axios.get(proxyUrl+this.$route.path).then((res)=>{
                const data = JSON.parse(res.data)
                if(data&& data.success){
                    store.commit({
                        type:'GetTopic',
                        topics:data.topics
                    })
                }
            })
        },
        computed:{
            ...mapGetters(['Topic'])
        }
    }
</script>
<style lang="stylus">
    li
        line-height 1.2
        margin-bottom 20px
</style>