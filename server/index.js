const express = require('express');
const request = require('request');
const app = express();

const baseUrl = `http://bbs.seu.edu.cn/api/`

app.use((req,res,next)=>{
    console.log('cors');
    res.set('Access-Control-Allow-Origin','*');
    next();
})

app.get('/topten', function (req, res, next) {
    const url = baseUrl + 'hot/topten.js'
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body)
        }
        else{
            res.json({
                code:1,
                error:error
            })   
        }
    })
})

app.listen(80,()=>{
    console.log('listening on 80');
})