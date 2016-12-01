const express = require('express');
const request = require('request');
const app = express();

const baseUrl = `http://bbs.seu.edu.cn/api`
// 设置cors请求头
app.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin','*');
    next();
})

/*
    前台请求 domain.com/xxx/yyy
    自动去请求 http://bbs.seu.edu.cn/api/xxx/yyy.js获取数据
    获得响应后转发给浏览器端
*/
app.get('/*',(req,res,next)=>{
    var apiUrl = req.url
    request(`${baseUrl}${apiUrl}.js`,(error,response,body)=>{
        console.log('suck',error,response.statusCode);
        if (!error && response.statusCode == 200) {
            res.json(body)
        }
        else{
            res.json({
                code:1,
                error:error.toString()
            })   
        }
    })
})

app.listen(80,()=>{
    console.log('listening on 80');
})