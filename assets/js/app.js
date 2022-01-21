$(document).ready(function(){
    // Click nav-bar
    $('.nav-bar').click(function(){
        $('header nav .responsive-main-menu').slideToggle();
    });
    //Scroll/resize window
    $(window).scroll(function(){
        $('header nav .responsive-main-menu').slideUp();
    })

    $(window).resize(function(){
        $('header nav .responsive-main-menu').slideUp();
    })

})