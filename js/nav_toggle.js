$(function() {
    var $header = $('#header');

    // Nav Toggle Button
    $('.c-toggle').click(function(){
        $header.toggleClass('open');
        // Global Nav
        if ( $('#header').hasClass('open') ) {
            $('.c-nav').slideDown();
            $('.c-nav').css('display','block');
        } else {
            $('.c-nav').slideUp(function() {
                $('.c-nav').css('display','none');
            });
        }
    });
});