// $(window).scroll(function () {
    
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
//     if(scroll<746){
//         $("#homec").addClass("on").siblings().removeClass("on");
//     }
//     if(scroll>=746&&scroll<1407){
//         $("#about").addClass("on").siblings().removeClass("on");
//     }
//     if(scroll>=1407&&scroll<2376){
//         $(".hobbyc").addClass("on").siblings().removeClass("on");
//     }
//     if(scroll>=2376&&scroll<3035){
//         $(".skillc").addClass("on").siblings().removeClass("on");
//     }
//     if(scroll>=3035&&scroll<3626){
//         $(".workc").addClass("on").siblings().removeClass("on");
//     }
//     if(scroll>=3406){
//         $(".contactc").addClass("on").siblings().removeClass("on");
//     }
    
//     //浠ヤ笅鏄妧鑳芥潯鐨勫姩鎬佹晥鏋�
//     if(scroll>=2228){
        
//         $(".html").animate({width:'700px'}, 1000);
//         $(".css").animate({width: "750px"}, 1000);
//         $(".javascript").animate({width: "650px"}, 1000);
//         $(".python").animate({width: "600"}, 1000);
//     } 
    
// })
$(function(){
    var top_home = $('#n_home').offset().top;
    var top_about = $('#about-me').offset().top;
    var top_skill = $('#skillc').offset().top;
    var top_work = $('#workc').offset().top;
    var top_contact = $('#contactc').offset().top;
    $("#n_home").click(function () {
        
        $("html, body").animate({ scrollTop: top_home}, 700);       
    })
    // $(".aboutme-btn").click(function(){
    //     $("html, body").animate({scrollTop: 746}, 700);
    // })
    $("#n_about").click(function(){
        // console.log(top_about);
        $("html, body").animate({scrollTop: top_about}, 700);
    })
    $("#n_skill").click(function(){
        $("html, body").animate({scrollTop:top_skill}, 700);
    })
    $("#n_work").click(function(){
        $("html, body").animate({scrollTop:top_work}, 700);
    })
    $("#n_contact").click(function(){
        $("html, body").animate({scrollTop:top_contact}, 700);
    })
})