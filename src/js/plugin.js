$(function(){

    var sidebar_btn = $('.mobile-sidebar-btn .fas');
    var main = $('main');
    var overlay = $('.overlay');

    sidebar_btn.on('click', function(){
        main.toggleClass('show');
    });
    overlay.on('click', function(){
        main.toggleClass('show');
    });

});