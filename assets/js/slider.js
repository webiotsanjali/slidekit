var swiper = new Swiper(".arrowswiper", {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 36,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 36,
        },
    },
});

var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: 180,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            spaceBetween: 100,
        },
        1399: {
            slidesPerView: 3,
            spaceBetween: 180,
        },
    },
});

var swiper = new Swiper(".blogswiper", {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 36,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 36,
        },
    },
});

// thumbnail slider
var swiper = new Swiper(".thumbnail-nav", {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 6,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        420: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1200: {
            spaceBetween: 15,
        },
        1400: {
            spaceBetween: 25,
            slidesPerView: 6,
        },
    },
  });
    var swiper2 = new Swiper(".thumbnail-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});