$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 91 ){
            $(".mainpage__navbar_box").css("background", "#333");
        } else $(".mainpage__navbar_box").css("background", "transparent");
    });
});
