
(function ($) {
    "use strict";

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