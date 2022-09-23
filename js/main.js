// PRELOADER
$(window).load(function () {
    $("#loading").fadeOut(500);
});

// NAVBAR
const open = document.querySelector('.container');
const close = document.querySelector('.close');
const sections = document.querySelector('.nav-text');
const sections1 = document.querySelector('.nav-text1');
const sections2 = document.querySelector('.nav-text2');
const sections3 = document.querySelector('.nav-text3');

var tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'expo.inOut'
    }
});

open.addEventListener('click', () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.to('nav', {
                right: 0
            })
            .to('nav', {
                height: '100vh'
            }, '-=.1')
            .to('nav ul li a', {
                opacity: 1,
                pointerEvents: 'all',
                stagger: .2
            }, '-=.9')
            .to('.close', {
                opacity: 1,
                pointerEvents: 'all'
            }, "-=.8")
            .to('nav h2', {
                opacity: 1
            }, '-=1')
            .to('svg', {
                opacity: 1
            }, '-=1')
    }
});

close.addEventListener('click', () => {
    tl.reverse();
});

sections.addEventListener('click', () => {
    tl.reverse();
});

sections1.addEventListener('click', () => {
    tl.reverse();
});

sections2.addEventListener('click', () => {
    tl.reverse();
});

sections3.addEventListener('click', () => {
    tl.reverse();
});

// SHOWCASE
const typed = new Typed('.typed', {

    stringsElement: '#cadenasTexto',
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 500,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1000,
    loop: true,
    loopCout: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
})

// SCROLL FADE OUT LOGO

let lastScroll = $(window).scrollTop();

$(window).scroll(function () {
    const currentScroll = $(window).scrollTop();
    if (currentScroll > lastScroll) {
        // scroll down
        $('#logo').removeClass().addClass('hidden');
    } else {
        // scroll up
        $('#logo').removeClass().addClass('visible');
    }

    // scroll update
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

// SCROLL DOWN FADE IN EFFECT
$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fadeIn').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 1s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).css( {
                        transition: 'opacity 1s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fadeIn').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});