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

    // tab 메뉴
    $("#tab_menu > ul:not("+$("ul.tab li a.selected").attr("href")+")").hide();
    $("ul.tab li a").on("click", function(){
       $("ul.tab li a").removeClass("selected");
       $(this).addClass("selected");
       $("#tab_menu ul").hide();
       $($(this).attr("href")).show();
       return false;
    });

    // 맨 위로 버튼
    $("#moveTop").on("click",function(){
        $("html, body").animate({scrollTop:0},500);
    })
});