//nav bar toggle //
$(function () {
    $('.nav__icon').on('click', function () {
        $(this).toggleClass('active');
        $('nav ul').slideToggle();
    });

    $(window).on('load resize', function () {
        var w = $(window).width();
        var h = $(window).height();
        var x = 700;
        if (w >= x) {
            $('nav ul').css({
                display: 'flex',
                height: 'auto'
            });
        } else {
            $('nav ul').css({
                display: 'none',
                height: h + 'px'
            });
        }
    });
});


window.sr = ScrollReveal({
    reset: false,
    origin: 'right',
    distance: '80px',
    duration: 800,
    delay: 10,
    mobile: true,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});
sr.reveal('.welcome-title', {
    origin: 'bottom',
    easing: 'ease',
    distance: '2rem',
    duration: 500,
    scale: 1.0,
    delay: 300,
    opacity: 0,
});
sr.reveal('.right-img', {
    origin: 'right',
    easing: 'ease',
    distance: '150%',
    duration: 900,
    scale: 1.0,
    delay: 300,
    opacity: 0.2,
});

sr.reveal('.left-img', {
    origin: 'left',
    easing: 'ease',
    distance: '150%',
    duration: 900,
    scale: 1.0,
    delay: 300,
    opacity: 0.2,
});

sr.reveal('.join-message', {
    origin: 'top',
    easing: 'ease-in',
    distance: '2rem',
    duration: 500,
    scale: 1.0,
    delay: 200,
    opacity: 0,
});


sr.reveal('.left', {
    delay: 200,
    origin: 'left',
    easing: 'ease-in',
    distance: '50%'
});