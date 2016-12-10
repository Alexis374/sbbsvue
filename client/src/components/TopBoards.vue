<template>
    <div>
        <h1>{{header}}</h1>
        <ul>
            <li v-for="board in TopBoards" @click="jumpToBoard(board)">{{board.description}}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import {store} from '../store'  // 只要store在声明Vue实例的时候注入到根组件，子组件就可以通过这样使用store
    import { mapGetters } from 'vuex'
    import {router} from '../main'
    import {proxyUrl} from '../config'
    export default{
        name:'Top10',
        data:()=>{return {header:"top10"}},
        created(){
            let self = this
            console.log('topboards created',this.$store);
            axios.get(proxyUrl+'/hot/boards').then((res)=>{           
                const boards = JSON.parse(res.data).boards
                store.commit({ // commit 的参数有多种形式，详见文档
                    type:'GetTopBoards',
                    boards
                })
                
            })
        },
        computed:{
            ...mapGetters(['TopBoards'])
        },
        methods:{
            jumpToBoard(board){
                const {name} = board
                router.push({
                    name:'board',
                    params:{
                        board:name
                    }
                })
            }
        }
    }
</script>
<style lang="stylus">
    li
        font-size:20px;

</style>