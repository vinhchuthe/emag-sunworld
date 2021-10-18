$.noConflict();
jQuery(document).ready(function ($) {
    const swiper1 = new Swiper('#sun-slider', {
        // Optional parameters
        loop: false,
        speed: 1200,
        preloadImages: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

        mousewheel: {
            control: true,
            invert: false,
        },

        on: {
            init: function () {
                var index = this.activeIndex;
                // console.log(index);
                if (index == 0) {
                    $("#slider-0 .item1").addClass("animated fadeInLeft").css('opacity', '1');
                    $("#slider-0 .item2").addClass("animated fadeInUp").css('opacity', '1');
                }
            },

            slideChangeTransitionEnd: function () {
                var index = this.activeIndex;
                // console.log(index);
                switch (index) {
                    case 0:
                        $("#slider-0 .item1").addClass("animated fadeInLeft").css('opacity', '1');
                        $("#slider-0 .item2").addClass("animated fadeInUp").css('opacity', '1');
                        break;
                    case 1:
                        $("#slider-1 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 3:
                        $("#slider-3 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 6:
                        $("#slider-6 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 9:
                        $("#slider-9 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 10:
                        $("#slider-10 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 13:
                        $("#slider-13 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 14:
                        $("#slider-14 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 15:
                        $("#slider-15 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 16:
                        $("#slider-16 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 18:
                        $("#slider-18 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 19:
                        $("#slider-19 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    case 21:
                        $("#slider-21 .item").addClass("animated fadeInLeft").css('opacity', '1');
                        break;
                    default:

                }
            },
            slideChange: function () {
                setTimeout(function () {
                    $(".swiper-slide .item1").removeClass("animated fadeInLeft").css('opacity', '0');
                    $(".swiper-slide .item2").removeClass("animated fadeInUp").css('opacity', '0');
                    $(".swiper-slide .item").removeClass("animated fadeInLeft").css('opacity', '0');
                }, 700);
            },
        },

    });
});