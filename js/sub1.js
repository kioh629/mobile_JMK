$(function(){

    // 햄버거메뉴
    $(".ham_btn").on("click",function(){
        $("#modal").css("display","block");
        $("#hammenu").animate({
            marginRight: "80%"
        },300);
    });

    $(".close_ham").on("click",function(){
        $("#modal").css("display","none");
        $("#hammenu").animate({
            marginRight: "0"
        },300);
    });

    // 서브메뉴
    $(".list_main").on("click",function(){
        if($(this).next().is(":visible")){
            $(this).next().stop().slideUp(300);     
            $(this).find(".open_list").attr("src","img/open_menu.png");
        } else {
            $(this).next().stop().slideDown(300);
            $(this).find(".open_list").attr("src","img/close_menu.png");
        }
    });

    

});