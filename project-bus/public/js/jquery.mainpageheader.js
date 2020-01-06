$(function() {
    $('#header_first').click(function() {
        $('.mainpage__header_case').removeClass("show");
        $('.mainpage__header_casefirst').toggleClass("show");
    })
});

$(function() {
    $('#header_second').click(function() {
        $('.mainpage__header_case').removeClass("show");
        $('.mainpage__header_casesecond').toggleClass("show");
    })
});

$(function() {
    $('#header_thirdth').click(function() {
        $('.mainpage__header_case').removeClass("show");
        $('.mainpage__header_casethirdth').toggleClass("show");
    })
});

$(function() {
    $('#header_fourth').click(function() {
        $('.mainpage__header_case').removeClass("show");
        $('.mainpage__header_casefourth').toggleClass("show");
    })
});

// servises block script
$(function() {
    $('.servises_input1').click(function() {
        $('.servises__info_case').removeClass("show");
        $('.servises__info_case1').toggleClass("show");
    })
});

$(function() {
    $('.servises_input2').click(function() {
        $('.servises__info_case').removeClass("show");
        $('.servises__info_case2').toggleClass("show");
    })
});
$(function() {
    $('.servises_input3').click(function() {
        $('.servises__info_case').removeClass("show");
        $('.servises__info_case3').toggleClass("show");
    })
});
$(function() {
    $('.servises_input4').click(function() {
        $('.servises__info_case').removeClass("show");
        $('.servises__info_case4').toggleClass("show");
    })
});
$(function() {
    $('.servises_input5').click(function() {
        $('.servises__info_case').removeClass("show");
        $('.servises__info_case5').toggleClass("show");
    })
});
$(function() {
    $('.servises_input6').click(function() {
        $('.servises__info_case').removeClass("show");
        $('.servises__info_case6').toggleClass("show");
    })
});
$('#navbar__button_checkbox').click(function(){
   if($(this). is(":checked")){
   $('.mainpage__navbar_box').css('background-color', '#333333');
 } else($('.mainpage__navbar_box').css('background-color', 'transparent'))
});
