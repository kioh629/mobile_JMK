$(function(){

    // 햄버거메뉴
    $(".ham_btn").on("click",function(){
        $("#modal").css("display","block");
        $("#hammenu").animate({
            marginRight: "80%"
        },300);
        $("body").addClass("body_lock");
    });

    $(".close_ham, #modal").on("click",function(){
        $("#modal").css("display","none");
        $("#hammenu").animate({
            marginRight: "0"
        },300);
        $("body").removeClass("body_lock");
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

    // 배너 - slick 적용
    $("#slide_banner").slick({
        dots: true, // 인디케이터 활성화
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1, // 한 화면에 보여줄 아이템 수
        slidesToScroll: 1,  // 한번에 슬라이드 시킬 아이템 수
    });

    // section1 - slick 적용
    $("#pageAll").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    })

    // section2 -slick 적용
    $("#ch_thum").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    });
    // section2 -
    $("#ch_thum ul a").on("click",function(){
        const video_src = $(this).find("img").attr("data-src");
        $("#ch_video li iframe").attr("src",video_src);
        return false;
    });



    // header 색 변화
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 0){
            $("#header").css("background-color","rgba(255,226,0,1)");
            $(".search img").attr("src","img/search.png");
            $("#logo h1 a img").attr("src","img/netmarble.png");
            $(".ham_btn span").css("background","#5C3722");
        } else {
            $("#header").css("background-color","rgba(255,226,0,0)");
            $(".search img").attr("src","img/search_w.png");
            $("#logo h1 a img").attr("src","img/netmarble_w.png");
            $(".ham_btn span").css("background","#fff");
        }
    });

    // 헤더 로고 클릭 시 맨 위로 가게
    $("#logo").on("click",function(){
        $("html, body").animate({scrollTop:0},500); 
    });

    // 맨 위로 버튼
    $("#moveTop").on("click",function(){
        $("html, body").animate({scrollTop:0},500);
    })

    // 검색창 활성화
    $(".search").on("click",function(){
        if ($("#search-input").css("opacity")==0) {
            $("#search-input").animate({opacity:1,width:75+"%"},100)
            $("#logo").css("display","none")
        } else {
            $("#search-input").animate({opacity:0,width:0},100)
            $("#logo").css("display","block")

        }
    })
});