// 0.加载express
const express=require('express');
// 1.调用express()得到一个app
const app=express();
// 2.设置请求对应的处理函数
app.get('/',(rep,res)=>{
  res.send('hello world')
})
// 3.监听端口号，启动服务器
app.listen(3000,()=>console.log('running...'));