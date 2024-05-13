(function($) {
    "use strict";

    /*---- Menu Stick ----*/
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });

    window.sr = ScrollReveal({
        duration: 800,
        reset: false
    });
    sr.reveal('.scroll-zoom');


    /*---- Setting active ----*/
    if ($('.setting-wrap').length) {
        var $body2 = $('body'),
            $parloDropdown2 = $('.setting-wrap'),
            $parloDropdownMenu2 = $parloDropdown2.find('.setting-content');
        $parloDropdown2.on('click', '.setting-active', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.setting-content').addClass('show').slideDown().parent().addClass('show');
            } else {
                $this.siblings('.setting-content').removeClass('show').slideUp().parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body2.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.setting-wrap') && !$($target).parents().is('.setting-wrap') && $parloDropdown2.hasClass('show')) {
                $parloDropdown2.removeClass('show');
                $parloDropdownMenu2.removeClass('show').slideUp();
            }
        });
    }

    /*---- Slider active ------*/
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*-------- Slider active 2 --------*/
    $('.slider-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>'],
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*-------- Slider active 3 ---------*/
    $('.slider-active-3').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa-solid fa-arrow-up"></i><span>Prev</span>', '<i class="fa-solid fa-arrow-down"></i><span>Next</span>'],
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*====== mobile off canvas active ======*/
    function headermobileAside() {
        var navbarTrigger = $('.mobile-aside-button'),
            endTrigger = $('.mobile-aside-close'),
            container = $('.mobile-off-canvas-active'),
            wrapper = $('.wrapper');
        wrapper.prepend('<div class="body-overlay"></div>');
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    }
    headermobileAside();


    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function(e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });
    $('.mobile-account-active').on('click', function(e) {
        e.preventDefault();
        $('.account-dropdown-active').slideToggle(900);
    });


    /*---- mobile-menu ----*/
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });

})(jQuery);