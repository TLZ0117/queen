//点击回到顶部
$(".backtop").on('click',function(){
    console.log(0);
    var iT = $(document).scrollTop();;
    if(iT > 200){
        $(document).scrollTop(0);
    }
});