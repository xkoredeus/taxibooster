
$(function() {
    setTimeout(function () {
        $('.preloader__wrp').fadeOut();
    }, 1000);
    $('.banner__descr-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#profit").offset().top - 50
        }, 700);
    });

    let tl = new TimelineMax();
    const controller = new ScrollMagic.Controller();

    tl
        .fromTo('.banner__subttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, "+=1.5")
        .staggerFromTo('.banner__ttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.7)
        .staggerFromTo('.banner__descr', .5, {y:30,opacity:0}, {y:0,opacity:1}, 0.7)
        .staggerFromTo('.header__logo', .2, {x:-30,opacity:0}, {x:0,opacity:1}, 0.7)
        .staggerFromTo('.header__nav-link', .2, {x:30,opacity:0}, {x:0,opacity: 1}, 0.1)
        .staggerFromTo('.header__login-btn', .2, {x:30,opacity:0}, {x:0,opacity:1}, 0.7)
        .staggerFromTo('.header__btn', .2, {scale:0.5,opacity:0}, {scale:1,opacity:1}, 0.7)
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });


});