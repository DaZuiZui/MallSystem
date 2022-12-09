var express = require('express');
var router = express.Router();

//路径
var path = require('path');
//图片上传
var multer  = require('multer');
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
 
 const upload = multer({
  dest: "./public/upload/temp",
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
 * 修改用户
 */
 router.post('/admin/user/update', function(req, res, next) {
  let aid = req.query.aid;
  let password = req.query.password;
  let sql = "update user set password = '"+password+"'  where id ="+aid;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send("修改成功");
  }) 
});

/**
 * 通过id查询user
 */
 router.post('/user/qbyid', function(req, res, next) {
  let aid = req.query.aid;
  let sql = "select * from user where id = "+aid;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  }) 
});

/**
 * 用户单独删除活动信息
 */
 router.post('/admin/user/byid', function(req, res, next) {
  let aid = req.query.aid;
  let sql = "delete from user where id = "+aid;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send("删除成功");
  }) 
});

/*
 * 用户批量删除信息
 */
router.post('/admin/user/delall', function(req, res, next) {
  let arr = req.query.arr;
  console.log(arr);
  let sql = "delete from user where id in ("+arr+")";
  console.log(sql);
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send("批量删除成功");
  })  
});

/*
 * 获取用户列表
 */
router.post('/getalluser', function(req, res, next) {
  let sql = "select * from user";
 
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  }) 
});

/**
 * 修改活动
 */
 router.post('/admin/activity/update', function(req, res, next) {
  let aid = req.query.aid;
  let ima_url = req.query.ima_url;
  let name = req.query.name;
  let sql = "update activity set name = '"+name+"', ima_url = '"+ima_url+"' where id ="+aid;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send("修改成功");
  }) 
});



/**
 * 通过id查询活动信息
 */
router.post('/activity/byid', function(req, res, next) {
  let aid = req.query.aid;
  let sql = "select * from activity where id = "+aid;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  }) 
});
/**
 * 单独删除活动信息
 */
 router.post('/admin/activity/byid', function(req, res, next) {
  let aid = req.query.aid;
  let sql = "delete from activity where id = "+aid;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send("删除成功");
  }) 
});

/*
 * 批量删除信息
 */
router.post('/admin/activity/delall', function(req, res, next) {
  let arr = req.query.arr;
  console.log(arr);
  let sql = "delete from activity where id in ("+arr+")";
  console.log(sql);
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send("批量删除成功");
  })  
});

/**
 *  添加活动信息
 */
router.post('/add/activity', function(req, res, next) {
  let name = req.query.name;
  let ima_url = req.query.ima_url;
  let create_time = req.query.create_time;
  let sql = "insert into activity value(null,'"+name+"','"+ima_url+"','"+create_time+"')"
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send("添加成功");
  }) 
 
});

/*
 * 获取活动主页
 */
router.post('/getActivityAll', function(req, res, next) {
  let sql = "select * from activity";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  }) 
});

/*
 * 商品信息修改
 */
router.post('/admin/goods/update', function(req, res, next) {
   
    let goodid = req.query.goodid;
    let gamename = req.query.gamename;
    let score = req.query.score;
    let goodintroduction = req.query.goodintroduction;
    let type = req.query.type;
    let ima_url = req.query.ima_url;
    let numbers = req.query.numbers;
    let name = req.query.name;
    let gid  = req.query.gid;
    console.log("??");
    let sql = "update good_info set goodid = '"+goodid+"' , gamename = '"+gamename+"' , score = '"+score+"' , goodintroduction='"+goodintroduction+"',";
    sql += " type = '"+type+"' , ima_url = '"+ima_url+"' , numbers = '"+numbers+"' , name = '"+name+"' where id = "+gid;
    console.log(sql);
    connection.query(sql, (err, rows, fields) => {
      if (err) throw err
      res.send("修改成功");
    }) 
});

/*
 * 通过id查询详细信息
 */
router.post('/admin/goods/querybyid', function(req, res, next) {
  let id  = req.query.id;
  let sql = "select * from good_info where id="+id;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send(rows);
  })  
});

/**
 * 批量删除
 */
router.post('/admin/info/delall', function(req, res, next) {
  let arr = req.query.arr;
  console.log(arr);
  let sql = "delete from good_info where id in ("+arr+")";
  console.log(sql);
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send("批量删除成功");
  })  
});

/**
 * 通过制定信息查询
 */
router.post('/querybysome', function(req, res, next) {
  let type = req.query.type;
  let name = req.query.name;
  let sql = "select * from good_info where type like '%"+type +"%' and name like '%"+name+"%'";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  })  
});

/**
 * 查看商品信息
 */
router.post('/getallgoodsinfo', function(req, res, next) {
  
  let sql = "select * from good_info";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send(rows);
  })  
 
});


/**
 * 添加商品
 */
router.post('/add/goodinfo', function(req, res, next) {
  let goodid = req.query.goodid;
  let gamename = req.query.gamename;
  let score = req.query.score;
  let goodintroduction = req.query.goodintroduction;
  let type = req.query.type;
  let ima_url = req.query.ima_url;
  let numbers = req.query.numbers;
  let name = req.query.name;
  let sql = "insert into good_info value(null,'"+goodid+"','"+gamename+"','"+score+"','"+goodintroduction+"','"+type+"','"+ima_url+"','"+numbers+"','"+name+"')"
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send("添加成功");
  })  
 
});

/*
 * 上传图片
 **/
const crypto = require("crypto");
var fs = require('fs');
router.post('/uploadPicForAgency', upload.any(), function(req, res, next) {
  const { fieldname, originalname } = req.files[0];
  // 创建一个新路径
  const name = crypto.randomUUID();
  console.log(name);
 
  const newName = "public/" + name + path.parse(originalname).ext;
  fs.rename(req.files[0].path, newName, function (err) {
      res.send(name+path.parse(originalname).ext);  
 });
});
 
/**
 *   展示图片
 */
 router.get("/download", async (req, res) => {
  let file_name = req.query.file_name; 
  let file_path = process.cwd() + "/public/" + file_name;
  res.download(file_path);
 
});
 
/* 
 * 批量删除
 */
router.post('/admin/type/dellAll', function(req, res, next) {
  let arr = req.query.arr;
  let sql = "delete from good_type where id in ("+arr+")";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send("批量删除成功");
  })  
});

/* 查询所有分类 */
router.post('/queryalltype', function(req, res, next) {
  let sql = "select * from good_type";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err

    res.send(rows);
  })  
 
});

/**
 * 添加分类
 */
 router.post('/post/goodtype', function(req, res, next) {
  let name = req.query.name;
  let sql = "insert into good_type value(null,'"+name+"')";

  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
  
    console.log('returna:', rows);
    res.send("插入成功");
  })  
});


/**
 * 修改密码
 */
 router.post('/user/update', function(req, res, next) {
  let id = req.query.id;
  let password = req.query.password;

  //修改密码
  let sql = "update user set password = '"+password+"' where id = "+id;

  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
  
    console.log('returna:', rows);
    res.send("修改成功");
  })  

 
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
