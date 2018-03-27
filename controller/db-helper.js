const mysql=require('mysql');

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'lmh',
  database:'ithub'
})

module.exports=connection;