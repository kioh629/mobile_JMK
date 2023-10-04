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

    // 배너
    let bnnNum = 0;

        // next button
    $(".next").on("click",function(){
        bnnNum ++;
        if (bnnNum > 4) bnnNum = 0
        book_w = $("#banner").width();
        $("#banner ul").animate({left:-bnnNum*book_w},500,function(){
            $(".idc img").attr("src","img/state_out.png");
            $(".idc img").eq(bnnNum).attr("src","img/state_over.png");
        })
    });
        // prev button
    $(".prev").on("click",function(){
        bnnNum--;
        if(bnnNum < 0) bnnNum = 4
        book_w = $("#banner").width();
        $("#banner ul").animate({left:-bnnNum*book_w},500,function(){
            $(".idc img").attr("src","img/state_out.png");
            $(".idc img").eq(bnnNum).attr("src","img/state_over.png");
        })
    });
        // indicator
    $(".idc li a").on("click", function(){
        let strName = $(this).parent().attr("id");
        slideTarget(strName.substr(3,1));
        return false;
    })
    function slideTarget(n) {
        const pos = Number(n)*-100+"%";
        $("#banner ul").animate({left:pos},500,function(){
            $(".idc img").attr("src","img/state_out.png");
            $(".idc img").eq(n).attr("src","img/state_over.png");
        })
    }
        // 자동 슬라이드
    let btnNum=0;
    setInterval(function(){
        btnNum++;
        if(btnNum>4) btnNum=0;
        $(".idc li a").eq(btnNum).trigger("click");
        //trigger : 강제로 이벤트 실행시킴
    },4000);

        // 이벤트 패널 인디케이터
        $("#section1_idc li a").on("click", function(){
            let strIDC = $(this).parent().attr("id");
            slideEVT(strIDC.substr(8,1));
            return false;
        })
        function slideEVT(n) {
            const pos = Number(n)*-100+"%";
            $("#pageAll").animate({left:pos},500,function(){
                $("#section1_idc img").attr("src","img/state_out_gray.png");
                $("#section1_idc img").eq(n).attr("src","img/state_over.png");
            })
        }
        let evtNum = 0;
        $(".sec1_next").on("click", function(){
            evtNum ++;
            if (evtNum > 1) evtNum = 0
            $("#pageAll").animate({left:-evtNum*100+"%"},500,function(){
                $("#section1_idc img").attr("src","img/state_out_gray.png");
                $("#section1_idc img").eq(evtNum).attr("src","img/state_over.png");
            });
            return false;
        });
        $(".sec1_prev").on("click", function(){
            evtNum --;
            if (evtNum < 0) evtNum = 1
            $("#pageAll").animate({left:-evtNum*100+"%"},500,function(){
                $("#section1_idc img").attr("src","img/state_out_gray.png");
                $("#section1_idc img").eq(evtNum).attr("src","img/state_over.png");
            });
            return false;
        });
            // header 색 변화
    $(window).on("scroll",function(){
        if($(window).scrollTop()> 0){
            $("#header").css("background-color","rgba(255,226,0,1)");
            $("#header button.search img").attr("src","img/search.png");
            $("#header #logo h1 a img").attr("src","img/netmarble.png");
            $(".ham_btn span").css("background","#5C3722");
        } else {
            $("#header").css("background-color","rgba(255,226,0,0)");
            $("#header button.search img").attr("src","img/search_w.png");
            $("#header #logo h1 a img").attr("src","img/netmarble_w.png");
            $(".ham_btn span").css("background","#fff");
        }
           
    });
});