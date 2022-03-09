(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

    // lightcase 
    $('a[data-rel^=lightcase]').lightcase();

    $(document).ready(function () {

        /*==== header Section Start here =====*/
        $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        })
        $('.ellepsis-bar').on('click', function (e) {
            var element = $('.header-top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(300, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(300, "swing");
                $('.overlayTwo').addClass('active');
            }
        });
        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        })

        //Header
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                fixed_top.addClass("header-fixed fadeInUp");
            } else {
                fixed_top.removeClass("header-fixed fadeInUp");
            }
        });

        /*==== header Section End here =====*/

        // scroll up start here
        $(function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({
                        'bottom': '5%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });

            //Click event to scroll to top
            $('a.scrollToTop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });

        // wow animation
        // new WOW().init();

        // Banner Slider
        var swiper = new Swiper('.banner__slider', {
            slidesPerView: 1,
            // autoplay: {
            //     delay: 8000,
            //     disableOnInteraction: false,
            // },
            loop: true,
        });



        //====Player slider================
        var swiper = new Swiper(".player-slider", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },

                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1439: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });

        // post thumb slider
        var swiper = new Swiper('.post-thumb-container', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.thumb-next',
                prevEl: '.thumb-prev',
            },
            loop: true,
        });

        // model option start here
        $(function() {
            $('.view-modal').on('click', function () {
                $('.modal').addClass('show');
            });
            $('.close').on('click', function () {
                $('.modal').removeClass('show');
            });
        });
        
    });

}(jQuery));