$(function() {
    var tab_dt_width = $('.c-tab dt').width();
    var $tab_dd = $('.c-tab dd');

    fix_tab();
    $(window).resize(function() {
        fix_tab();
    });

    function fix_tab() {
        var width = $(window).width();
        if (width > 1024) {
            $tab_dd.css('padding-left', tab_dt_width);
        } else {
            $tab_dd.css('padding-left', 0);
        }
    }

});