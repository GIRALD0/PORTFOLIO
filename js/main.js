// PRELOADER
$(window).load( function () {
    $( "#loading" ).fadeOut( 500 );
});

// NAVBAR
const open = document.querySelector('.container');
const close = document.querySelector('.close');
const sections = document.querySelector('.nav-text');
const sections1 = document.querySelector('.nav-text1');
const sections2 = document.querySelector('.nav-text2');
const sections3 = document.querySelector('.nav-text3');

var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });

open.addEventListener('click', () => {
	if (tl.reversed()) {
		tl.play();
	} else {
		tl.to('nav', { right: 0 })
		.to('nav', { height: '100vh' }, '-=.1')
		.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.9')
		.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
		.to('nav h2', { opacity: 1 }, '-=1')
        .to('svg', { opacity: 1 }, '-=1')
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