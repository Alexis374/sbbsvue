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
    export default{
        data:()=>{return {header:"top10",topics:[]}},
        created(){
            let self = this
            console.log('top10 created');
            axios.get('http://localhost/hot/topten').then((res)=>{
                self.topics = JSON.parse(res.data).topics
            })
        }
    }
</script>
<style lang="stylus">
    li
        font-size:20px;

</style>