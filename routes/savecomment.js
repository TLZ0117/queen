var express = require('express');
var router = express.Router();
var commentsdb = require("../db/commentsdb");


router.post('/', function(req, res, next) {
    if(!req.session.username){
        res.send("<script>alert('请登录');location.href='login.html';</script>");
    }else{
        //1、接收前端发来的数据(评论内容，)
        let goodsid  = req.body.goodsid;
        let comment  = req.body.comment;

        //得到当前时间
        let now = new Date();
        //得到当前的登录用户名
        let username = req.session.username;
        //2、链接数据库，添加数据

        commentsdb.add({
            "goodsid":goodsid,
            "username":username,
            "comment":comment,
            "commentimg":req.session.commentimg,
            "commentdate":now
        },function (isSuccess) {
            if(isSuccess){
                res.redirect("goodsdetail0?goodsid="+goodsid);
            }else{
                res.send("评论失败！");
            }
        });
    }
});

module.exports = router;
