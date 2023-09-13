$(function() {
    var $works_bg = $('.works-bg');
    var $slide = $('.swiper-wrap');
    var slide_bullets_height = $('.swiper-page-nation-bullets').outerHeight(true);
    var slide_height = $slide.outerHeight(true);
    var works_bg_height = slide_height*0.5 + slide_bullets_height;
    var works_bg_top = slide_height*0.5;

    media();
    $(window).resize(function() {
        media();
    });

    function media() {
        var width = $(window).width();
        if (width < 1025) {
            // Fix works-bg
            $works_bg.css('display', 'block');
            $works_bg.css('height', works_bg_height);
            $works_bg.css('top', works_bg_top);
        } else {
            $works_bg.css('display', 'none');
        }
    }

});