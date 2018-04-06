var express = require('express');
var router = express.Router();
var vipsdb = require("../db/vipdb");

router.get("/",function (req,res) {
    res.render("reg",{"errmsg":""});
});

router.post('/', function(req, res, next) {
    //1、接收数据（用户名，密码，年龄）
    let username = req.body.username;
    let userpass = req.body.userpass;
    let age = req.body.age;

    console.log(username);
    console.log(typeof userpass);
    //2、链接数据库，进行保存
    vipsdb.regsave({
        "username":username,
        "userpass":userpass,
        "age":age
    },function (isSuccess){
        //3、响应
        if(isSuccess){
            // res.render("reg",{"errmsg":"注册成功"});
            res.redirect("login.html");
        }else{
            res.render("reg",{"errmsg":"注册失败"});
        }
    });
});

module.exports = router;