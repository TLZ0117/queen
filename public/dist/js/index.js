    var iTimer = null;
    // 轮播图部分
    //离开大盒子时自动轮播
  $('.bigbox').on('mouseout', function () {
      // $('#pre').css('left', -1000);
      // $('#next').css('right', -1000);
        iTimer = setInterval( ()=>{
           //自动向右轮播
               $(".bigbox").stop(true).animate({ marginLeft: "-100%" }, 1000 ,function () {
                   $(".pic").eq(0).appendTo($(".bigbox"));
                   $(".bigbox").css('marginLeft', '0px');
               });
       },4000)
       // return iTimer;
    })
//进入时轮播停止
    $('.bigbox').on('mouseenter',function(){
        clearInterval(iTimer);
        $('#pre').css('left', 0);
        $('#next').css('right', 0);
        $('#next').click(function () {
            // $(".bigbox").css('marginLeft','0px');
            $(".bigbox").stop(true).animate({ marginLeft: "-100%" }, 800, function () {
                $(".pic").eq(0).appendTo($(".bigbox"));
                $(".bigbox").css('marginLeft', '0px');
            });
        })
        $('#pre').click(function () {
            $(".pic").eq(1).prependTo($(".bigbox"));
            $(".bigbox").css('marginLeft', '-100%');
            $(".bigbox").stop(true).animate({ marginLeft: "0px" }, 1000);
        })
    })

//点击回到顶部
    $(".backtop").on('click',function(){
        console.log(0);
        var iT = $(document).scrollTop();;
        if(iT > 200){
            $(document).scrollTop(0);
        }
    });
    

