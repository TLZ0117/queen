var express = require('express');
var router = express.Router();
var goodslistsdb = require("../db/goodlistsdb");
var commentsdb = require("../db/commentsdb");

router.get('/', function(req, res, next) {
//1 接收前段请求的数据（goodsid）
    const goodsid = req.query.goodsid;
    var pageindex = req.query.pageindex || 1;
    //1、链接数据库，查询所有的商品和商品评论
    //1)、查询商品详情
    goodslistsdb.find({"goodsid":goodsid},function (data) {
        //2、用查询到的数据渲染模板，并响应给前端
            commentsdb.findByPageIndex({"goodsid":goodsid},pageindex,function (comments,maxpageindex) {
                let showcomment = req.session.username?"block":"none";
            res.render("goodsdetail", {
                "goodsdetail":data[0],
                "comments":comments,
                "showcomment":showcomment,
                "page":{
                    "maxPageIndex":maxpageindex,
                    "currPageIndex":pageindex
                }
            });
        });
    });
});
module.exports = router;
