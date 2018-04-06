
//轮播图部分
//点击方向箭头切换图片
$(function () {
    $('.next').click(function () {
        // $(".bigbox").css('marginLeft','0px');
        $(".bigbox").stop(true).animate({ marginLeft: "-100%" }, 800, function () {
            $(".special").eq(0).appendTo($(".bigbox"));
            $(".bigbox").css('marginLeft', '0px');
        });
    })
    $('.pre').click(function () {
        $(".special").eq(3).prependTo($(".bigbox"));
        $(".bigbox").css('marginLeft', '-100%');
        $(".bigbox").stop(true).animate({ marginLeft: "0px" }, 800);
    })
})

//点击切换菜单栏,变换内容
$('#commo').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.comment').css('display', 'block');
    $('.picture').css('display', 'none');
    $('#pageBox').css('display', 'block');
    $('.hr').css('display', 'block');
});
$('#infor').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.picture').css('display', 'block');
    $('#pageBox').css('display', 'none');
    $('.hr').css('display', 'none');
    $('.comment').css('display', 'none');
});

//点击选中颜色
$(".bj2").click(function(){
    console.log('000');
    $(this).toggleClass("active");
});

//点击回到顶部
    $(".backtop").on('click',function(){
        console.log(0);
        var iT = $(document).scrollTop();;
        if(iT > 200){
            $(document).scrollTop(0);
        }
    });
