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

//划过时字体颜色变化
$(".left-label").mouseenter(function(){
    $(".password").css("color","#ff6700");
})
$(".left-label").mouseout(function(){
    $(".password").css("color","#666666");
})

//点击时选择记住自己
$(".ii").click(function(){
    console.log('000');
    $("#selected").toggleClass("active");
})