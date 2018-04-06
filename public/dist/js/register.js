//点击回到顶部
$(".backtop").on('click',function(){
    console.log(0);
    var iT = $(document).scrollTop();;
    if(iT > 200){
        $(document).scrollTop(0);
    }
});

//获取焦点时外边框颜色为黑色
$("input").focus(function(){
    console.log(100);
    $(this).css("border-color","#000");
});
//失去焦点时外边框颜色为黑色
$("input").blur(function(){
    console.log(100);
    $(this).css("border-color","#eeeeee");
});

//注册验证
$(function () {
    $("#userid").blur(function () {
        $.ajax({
            url:"usercheck",
            data:{
                "username":$("#userid").val()
            },
            success:function (data) {
                if(data==1){//data是1：表示存在，0：表示不存在
                    $("#userMsg").html("亲，该用户名已被使用");
                }else{
                    $("#userMsg").html("亲，该用户名没有人用，赶紧注册吧！");
                }
            }
        });
    });
})