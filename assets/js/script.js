
(function ($) {
    "use strict";

    /*=====================
     Image to background js
     ==========================*/
    $(".bg-top").parent().addClass('b-top');
    $(".bg-bottom").parent().addClass('b-bottom');
    $(".bg-center").parent().addClass('b-center');
    $(".bg-left").parent().addClass('b-left');
    $(".bg-right").parent().addClass('b-right');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up").parent().addClass('blur-up lazyload');
    $('.bg-img').each(function () {

        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();


        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'display': 'block'
        });

        el.hide();
    });

    $(".nav-pills .search-icon").on('click', function() {
        $(".form-icon").toggleClass('open');
     });

    const mediaQuery = window.matchMedia('(min-width: 576px)')
    if (mediaQuery.matches) {
        $('nav .nav-item').each(function() { 
            $(this).css( 'width', $(this).width()+'px' ); 
        });
    }

    $(".dropdown-menu a").on('click', function() {
        var a = $(this).closest("a");
        var getSampling = a.text();
        $(this).parent().addClass("select").siblings().removeClass('select');
        $(this).closest(".dropdown-menu").prev('.dropdown-toggle').find('span').text(getSampling);
     });

    $(".filter-wrap h4").on('click', function() {
        $(".filter-list").toggleClass('open');
    });

})(jQuery);
