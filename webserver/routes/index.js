var express = require('express');
var router = express.Router();
 //mysql.js
 var mysql = require('mysql'); //调用MySQL模块
 //创建一个connection
 var connection = mysql.createConnection({
     host: '101.34.210.38',   //主机
     user: 'bryan',              //数据库用户名
     password: 'admin',          //数据库密码
     port: '3306',       
     database: 'mell',           //数据库名称
     charset: 'UTF8_GENERAL_CI' //数据库编码
 });
 
 module.exports = connection  

const {
  userLogin
} = require("../src/com/xxx/serivce/UserService")

/* GET home page. */
router.get('/', function(req, res, next) {
  let res1 = "userLogin("
  res.send(res1);
});

/**
 * 管理员登入
 */
 router.post('/admin/login',(req,res) =>{
  let username = req.query.username;
  let password = req.query.password;

  let sql = "SELECT *from user where username = '"+username +"' and password = '"+password+"' and role = 1";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
  
    console.log('returna:', rows);
    res.send(rows);
  })  
  return ;
})



/**
 * 用户登入
 */
router.post('/user/login',(req,res) =>{
  let username = req.query.username;
  let password = req.query.password;

  let sql = "SELECT *from user where username = '"+username +"' and password = '"+password+"'";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
  
    console.log('returna:', rows);
    res.send(rows);
  })  
  return ;
})
 
/**
 * 用户注册
 */
 router.post('/user/reg',(req,res) =>{
  let username = req.query.username;
  let password = req.query.password;
  var ans = "";
  //查询账号是否唯一
  let sql = "SELECT *from user where username = '"+username +"'";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    console.log(rows);
    if(rows.length > 0){
      res.send("注册失败，该账户已经存在！");
   
    }else{
  //写入mysql
      sql = "insert into user value(null,'"+username +"','"+password+"',3)";
      connection.query(sql, (err, rows, fields) => {
        if (err) throw err
      
        console.log('returna:', rows);
        //ans ="注册成功";
        res.send("注册成功");
      })  
    }
  })  
})

module.exports = router;
