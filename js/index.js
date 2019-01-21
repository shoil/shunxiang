// 使导航栏因滚动而变色
$(window).scroll(function () {
    
    var scroll = $(window).scrollTop();
    var top_about = $('#about-me').offset().top;
    var top_skill = $('#skillc').offset().top;
    var top_work = $('#workc').offset().top;
    var top_contact = $('#contactc').offset().top;
    if(scroll<top_about){

        $("#n_home").addClass("on").parent().siblings().children().removeClass('on');
    }
    if(scroll>=top_about&&scroll<top_skill){
        $("#n_about").addClass("on").parent().siblings().children().removeClass('on');
    }
    if(scroll>=top_skill&&scroll<top_work){
        // console.log(1);
        $("#n_skill").addClass("on").parent().siblings().children().removeClass('on');
    }
    if(scroll>=top_work&&scroll<top_contact){
        $("#n_work").addClass("on").parent().siblings().children().removeClass('on');
    }
    if(scroll>=2370){
        $("#n_contact").addClass("on").parent().siblings().children().removeClass('on');
    }
    
})

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var top_about = $('#about-me').offset().top;
    console.log(scroll);
    if(scroll>top_about){
        $("#my_head").addClass("new")
    }

})
// 使点击导航栏能滚动到目标位置
$(function(){
    // var top_home = $('#n_home').offset().top;
    var top_about = $('#about-me').offset().top;
    var top_skill = $('#skillc').offset().top;
    var top_work = $('#workc').offset().top;
    var top_contact = $('#contactc').offset().top;
    $("#n_home").click(function () {
        // console.log(top_home);
        $("html, body").animate({ scrollTop: 0}, 700);       
    })
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