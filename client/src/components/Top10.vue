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
    import {store} from '../store'
    import { mapGetters } from 'vuex'

    export default{
        name:'Top10',
        data:()=>{return {header:"top10"}},
        created(){
            let self = this
            console.log('top10 created',this.$store);
            axios.get('http://localhost/hot/topten').then((res)=>{
                const topics = JSON.parse(res.data).topics
                store.commit({
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