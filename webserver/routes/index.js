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
 * 用户登入
 */
router.get('/user/login',(req,res) =>{
  let username = req.query.username;
  let password = req.query.password;

  let sql = "SELECT *from user where username = '"+username +"' and password = '"+password+"'";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
  
    console.log('returna:', rows);
    res.send(rows);
  })  
})
 

module.exports = router;
