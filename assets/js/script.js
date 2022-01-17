
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

    $(".navbar-toggler").on('click', function() { 
        $('.bg-overlay').addClass('active');
    });

    $(".close-toggle").on('click', function() {
        $(".navbar-collapse").removeClass('show');
        $('.bg-overlay').removeClass('active');
    });

     var contentwidth = $(window).width();
     if (contentwidth < 768) {
       $('<div class="bg-overlay"></div>').appendTo($("body"));
     }

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

    const mediaQuery1 = window.matchMedia('(max-width: 767px)')
    if (mediaQuery1.matches) {
            $(".navbar-brand").find('img').attr('src', 'assets/images/favicon.png'); 
    } else {
        $(".navbar-brand").find('img').attr('src', 'assets/images/logo.png'); 
    }

})(jQuery);

$(document).mouseup(function(e) {
    // menu sidebar
    var navMenu = $(".nav-menu");
    if (!navMenu.is(e.target) &&
        navMenu.has(e.target).length === 0) {
        $(".navbar-collapse").removeClass('show');
        $('.bg-overlay').removeClass('active');
    }

});