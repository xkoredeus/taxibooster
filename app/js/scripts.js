
$(function() {
    // $(window).on('load', function () {
    //     $('.preloader__wrp').fadeOut();
    // });
    setTimeout(function () {
        $('.preloader__wrp').fadeOut();
    }, 4000);
    $('.banner__descr-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#profit").offset().top - 50
        }, 700);
    });
    //Закрываем AjaxForm popup после успешной отправки
    // $(document).on('af_complete', function(event,res) {
    //   if(res.success) parent.$.fancybox.close();
    // });
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var SmoothScroll = function(){
        this.init();
    };

    SmoothScroll.prototype = {
        dirOfChange: 0,
        scrollTop: 0,
        init: function(){
            this.bindEvents();
            this.render();
        },
        bindEvents: function(){
            var self = this;
            $('body').on('mousewheel', function(e){
                e.preventDefault();
                var change =  e.deltaY * 2;
                self.scrollTop -= change;

                if(change > 0){
                    self.dirOfChange = -1;
                }else{
                    self.dirOfChange = 1;
                }
            });
        },
        render: function(){
            var self = this;
            window.requestAnimFrame(function(){
                self.render();
            });

            if (this.dirOfChange < 0) {
                if (this.scrollTop > -1) {
                    this.scrollTop = 0;
                    return;
                }
            } else {
                if (this.scrollTop < 1) {
                    this.scrollTop = 0;
                    return;
                }
            }

            TweenMax.set($('body'), {
                scrollTop: "+=" + this.scrollTop
            });

            this.scrollTop *= 0.9;
        }
    };

    var ss = new SmoothScroll();

    let tl0   = new TimelineMax()
        tl1p1 = new TimelineMax()
        tl1p2 = new TimelineMax()
        tl2p1 = new TimelineMax()
        tl2p2 = new TimelineMax()
        tl3p1 = new TimelineMax()
        tl3p2 = new TimelineMax()
        tl4p1 = new TimelineMax()
        tl4p2 = new TimelineMax()
        tl5p1 = new TimelineMax()
        tl5p2 = new TimelineMax()
        tl6p1 = new TimelineMax();
        // tl7 = new TimelineMax();
    const controller = new ScrollMagic.Controller();
    tl0
        .fromTo('.preloader__logo', .3, {x:10,opacity:0},{x:0,opacity:1}, 0.5)
        .staggerFromTo('.preloader__title', .3, {x:10,opacity:0},{x:0,opacity:1}, 0.3)
        .staggerFromTo('.preloader__subtitle', .3, {x:10,opacity:0},{x:0,opacity:1}, 0.3)
        .staggerFromTo('.preloader', 1, {scale:1}, {scale:1.1,ease: Linear.easeNone,repeatDelay:0, repeat:-1, yoyo:true}, 0)
    tl1p1
        .fromTo('.banner__bg', 1.5, {scale:1.05,opacity:0}, {scale:1,opacity:1}, "+=3")
        .staggerFromTo('.banner__subttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.3)
        .staggerFromTo('.banner__ttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.7)
        .staggerFromTo('.banner__descr', .5, {y:30,opacity:0}, {y:0,opacity:1}, 0.7)
        .staggerFromTo('.header__logo', .2, {x:-30,opacity:0}, {x:0,opacity:1}, 0.7)
        .staggerFromTo('.header__nav-link', .2, {x:30,opacity:0}, {x:0,opacity: 1}, 0.1)
        .staggerFromTo('.header__login-btn', .2, {x:30,opacity:0}, {x:0,opacity:1}, 0.7)
        .staggerFromTo('.header__btn', .2, {scale:0.5,opacity:0}, {scale:1,opacity:1}, 0.7)
    tl1p2
        .fromTo('.banner__bg', .7, {y: 0,scale:1}, {y: 20,scale:1.05})
        .fromTo('.banner__in', .5, {y:0}, {y:-30}, "-=0.7")
    tl2p1
        .fromTo('.profit__card', .6 ,{y:120,opacity:0}, {y:0,opacity:1})
        .staggerFromTo('.profit__ttl', 1, {opacity:0}, {opacity:1}, 0.7)
        .staggerFromTo('.profit__subttl', .6, {opacity:0}, {opacity:1}, 0.5)
        .staggerFromTo('.profit__descr', .6, {y:30,opacity:0}, {y:0,opacity:1}, 0.5)
    tl2p2
        .staggerFromTo('.profit__calc', .7, {x:50,opacity:0}, {x:0,opacity:1}, 1)
    tl3p1
        .staggerFromTo('.need .section__subttl', .6, {opacity:0}, {opacity:1}, 0.5)
        .staggerFromTo('.need .section__ttl', .6, {opacity:0}, {opacity:1}, 0.7)
        .staggerFromTo('.need__descr', .6, {y:30,opacity:0}, {y:0,opacity:1}, 0.5)
    tl3p2
        .staggerFromTo('.need__img', .7, {y:50,opacity:0}, {y:0,opacity:1}, 1)
    tl4p1
        .fromTo('.pay__card', .6 ,{y:120,opacity:0}, {y:0,opacity:1})
        .staggerFromTo('.pay .section__subttl', 1, {opacity:0}, {opacity:1}, 0.7)
        .staggerFromTo('.pay__ttl', .6, {opacity:0}, {opacity:1}, 0.5)
        .staggerFromTo('.pay__descr', .6, {y:30,opacity:0}, {y:0,opacity:1}, 0.5)
    tl4p2
        .staggerFromTo('.pay__img_1', .7, {y:50,opacity:0}, {y:0,opacity:1}, 2)
        .staggerFromTo('.pay__img_2', .7, {y:50,opacity:0}, {y:0,opacity:1}, "-=.3")
    tl5p1
        .fromTo('.dia__card', .6 ,{y:120,opacity:0}, {y:0,opacity:1})
        .staggerFromTo('.dia .section__subttl', 1, {opacity:0}, {opacity:1}, 0.7)
        .staggerFromTo('.dia .section__ttl', .6, {opacity:0}, {opacity:1}, 0.5)
        .staggerFromTo('.dia__descr', .6, {y:30,opacity:0}, {y:0,opacity:1}, 0.5)
    tl5p2
        .staggerFromTo('.dia__img_1', .7, {y:50,opacity:0}, {y:0,opacity:1}, 2)
        .staggerFromTo('.dia__card-img', .7, {y:50,opacity:0}, {y:0,opacity:1}, "-=.3")
    tl6p1
        .fromTo('.feed__card', .6 ,{y:120,opacity:0}, {y:0,opacity:1})
        .staggerFromTo('.feed__img', .6, {y:30,opacity:0}, {y:0,opacity:1}, "-=3")
        .staggerFromTo('.feed .section__subttl', 1, {opacity:0}, {opacity:1}, 0.7)
        .staggerFromTo('.feed .section__ttl', .6, {opacity:0}, {opacity:1}, 0.5)
        .staggerFromTo('.feed__form', .6, {y:30,opacity:0}, {y:0,opacity:1}, 0.5)
    const scene1p1 = new ScrollMagic.Scene({
        triggerElement: ".banner",
        triggerHook: 0.1,
        reverse: false,
    })
        .setTween(tl1p1)
        .addTo(controller);
    const scene1p2 = new ScrollMagic.Scene({
        triggerElement: ".banner__descr",
        triggerHook: 0.4,
    })
        .setTween(tl1p2)
        .addTo(controller);
    const scene2p1 = new ScrollMagic.Scene({
        triggerElement: ".profit",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(tl2p1)
        .addTo(controller);
    const scene2p2 = new ScrollMagic.Scene({
        triggerElement: ".profit__descr",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(tl2p2)
        .addTo(controller);
    const scene3p1 = new ScrollMagic.Scene({
        triggerElement: ".need",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(tl3p1)
        .addTo(controller);
    const scene3p2 = new ScrollMagic.Scene({
        triggerElement: ".need__descr",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(tl3p2)
        .addTo(controller);
    const scene4p1 = new ScrollMagic.Scene({
        triggerElement: ".pay",
        triggerHook: 0.3,
        reverse: false,
    })
        .setTween(tl4p1)
        .addTo(controller);
    const scene4p2 = new ScrollMagic.Scene({
        triggerElement: ".pay__descr",
        triggerHook: 0.4,
        reverse: false,
    })
        .setTween(tl4p2)
        .addTo(controller)
    const scene5p1 = new ScrollMagic.Scene({
        triggerElement: ".dia",
        triggerHook: 0.3,
        reverse: false,
    })
        .setTween(tl5p1)
        .addTo(controller);
    const scene5p2 = new ScrollMagic.Scene({
        triggerElement: ".dia__descr",
        triggerHook: 0.7,
        reverse: false,
    })
        .setTween(tl5p2)
        .addTo(controller);
        
    const scene6p1 = new ScrollMagic.Scene({
        triggerElement: ".feed",
        triggerHook: 0.3,
        reverse: false,
    })
        .setTween(tl6p1)
        .addTo(controller);
        
    // const scene7p2 = new ScrollMagic.Scene({
    //     triggerElement: ".feed__form",
    //     triggerHook: 0.5,
    //     reverse: false,
    // })
    //     .setTween(tl7)
    //     .addTo(controller)
    //     .addIndicators({
    //         colorTrigger: "purple",
    //         colorStart: "purple",
    //         colorEnd: "purple",
    //         indent: 10
    //     });
    $( function() {
        let handle1 = $( ".js-handle_1 span" );
        $( ".js-slider_1 " ).slider({
            value: 250,
            range: "max",
            min: 5,
            max: 1000,
            create: function() {
                handle1.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handle1.text( ui.value );
            }
        });
        let handle2 = $( ".js-handle_2 span" );
        $( ".js-slider_2 " ).slider({
            value: 25,
            range: "max",
            min: 1,
            max: 50,
            create: function() {
                handle2.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handle2.text( ui.value );
            }
        });
        var tarif = 6,
            result_outptut = jQuery(".profit__calc-res-val"),
            client = 24,
            revenue = 0,
            check = 4000,
            time = 3;

        function recount() {
            revenue = (client+check+time)*tarif;
            result_outptut.html(revenue + ' руб/мес');
        };
        $(document).on("change keyup", "#amount", function() {
            client = +$(this).val();
            $(".js-slider_1").slider("value", client);
            recount();
        });
        $(document).on("change keyup", "#amount2", function() {
            check = +$(this).val();
            $(".js-slider_2").slider("value", check);
            recount();
        });
    } );
    $('.js-res__show').on('click', function resShowBtnClick(e) {
        e.preventDefault();
        $(this).hide(300);
        setTimeout(function () {
            $('.profit__calc-res').show(300);
        }, 400);

    });


    // const slider = $("#calculatorSlider");
    // const developerBtn = $("#developerBtn");
    // const corporateBtn = $("#corporateBtn");
    // const privateBtn = $("#privateBtn");
    // const reseller = $("#resellerEarnings");
    // const client = $("#clientPrice");
    // const percentageBonus = 30; // = 30%
    // const license = {
    //     corpo: {
    //         active: true,
    //         price: 319,
    //     },
    //     dev: {
    //         active: false,
    //         price: 149,
    //     },
    //     priv: {
    //         active: false,
    //         price: 79,
    //     }
    // }
    //
    // function calculate(price, value) {
    //     client.text((Math.round((price - (value / 100 * price)))) + '$');
    //     reseller.text((Math.round(((percentageBonus - value) / 100 * price))) + '$')
    // }
    //
    // function reset(price) {
    //     slider.val(0);
    //     client.text(price + '$');
    //     reseller.text((Math.round((percentageBonus / 100 * price))) + '$');
    // }
    // developerBtn.on('click', function(e) {
    //     license.dev.active = true;
    //     license.corpo.active = false;
    //     license.priv.active = false;
    //     reset(license.dev.price)
    // });
    // privateBtn.on('click', function(e) {
    //     license.dev.active = false;
    //     license.corpo.active = false;
    //     license.priv.active = true;
    //     reset(license.priv.price);
    // });
    // corporateBtn.on('click', function(e) {
    //     license.dev.active = false;
    //     license.corpo.active = true;
    //     license.priv.active = false;
    //     reset(license.corpo.price);
    // });
    // slider.on("input change", function(e) {
    //     if (license.priv.active) {
    //         calculate(license.priv.price, $(this).val());
    //     } else if (license.corpo.active) {
    //         calculate(license.corpo.price, $(this).val());
    //     } else if (license.dev.active) {
    //         calculate(license.dev.price, $(this).val());
    //     }
    // })
});