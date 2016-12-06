<template>
    <div>
        <h1>{{header}}</h1>
        <ul>
            <li v-for="topic in Board" @click="jumpToTopic(topic.board,topic.id)">{{topic.author}}--{{topic.title}}</li>
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
                header:'board'
            }
        },
        name:'board',
        created(){
            // /board/SEUExpress.js?mode=2
            console.log(proxyUrl+this.$route.path,'fuck')
            axios.get(proxyUrl+this.$route.path).then((res)=>{
                const data = JSON.parse(res.data)
                if(data&& data.success){
                    store.commit({
                        type:'GetBoard',
                        topics:data.topics
                    })
                }
            })
        },
        computed:{
            ...mapGetters(['Board'])
        },
        methods:{
            jumpToTopic(board,id){
                router.push({
                    name:'topic',
                    params:{
                        board,
                        id
                    }
                })
            }
        }
    }


</script>