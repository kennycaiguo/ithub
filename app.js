// 0.加载express router
const express=require('express');
const router =require('./router');

const app=express();

app.use(router);
// 3.监听端口号，启动服务器
app.listen(3000,()=>console.log('running...'));