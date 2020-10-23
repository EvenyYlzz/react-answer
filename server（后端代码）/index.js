var express = require('express')
var app = express()
var sqlQuery = require('./sql')

app.get('/',()=>{
    res.send("这是答题API服务器")
})

app.get('/api/rtimu/',async (req,res)=>{
    //  随机获取10个题目：
    // console.log(req.query)

    //  通过后端增加请求头来解决跨域请求问题
    res.append('Access-Control-Allow-Origin','*')
    res.append('Access-Control-Allow-Content-Type','*')


    let page = req.query.page?req.query.page:2
    let strSql = `select * from quizzes limit ${page*10},10`
    let result = await sqlQuery(strSql)
    // console.log(result)

    res.json(Array.from(result))
})

app.listen(8080,() => {
    console.log(
        "server Start",
        "http://localhost:8080/"
    )
})