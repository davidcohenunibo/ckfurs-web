$(function() {
    "use strict";

    const fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        window.on('resize', function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    //Listener for the button click event to toggle the menu
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    //Listener to click event link to the correct page when clicking on the menu item
    $('#sidebar li a').on('click', function () {
        $('#sidebar').addClass('active');
    });

    //gsap.fromTo( ".wrap", {
    //  backgroundColor: gsap.getProperty("html", "--dark")
    //}, {
    //  scrollTrigger: {
    //    trigger: ".color-light",
    //    scrub: true,
    //    end: "bottom bottom",
    //  },
    //  backgroundColor: gsap.getProperty("html", "--light")
    //});

    //register the plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    //create a timeline for change the background color of the body when scrolling down
    gsap.utils.toArray('.section').forEach((section, _) => {

        if (section.getAttribute('data-color') !== null) {

            const colorAttr = section.getAttribute('data-color');

            gsap.to(".wrap", {
                backgroundColor: colorAttr === "dark" ? gsap.getProperty("html", "--bs-dark") : gsap.getProperty("html", "--bs-light"),
                color: colorAttr === "dark" ? gsap.getProperty("html", "--bs-light") : gsap.getProperty("html", "--bs-dark"),
                immediateRender: false,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    start: 'top bottom',
                    end: '+=100%'
                }
            });

        }

    });

    /*	gsap.utils.toArray('.demo-text').forEach((section, index) => {
            const w = section.querySelector('.wrapper');
            const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            gsap.fromTo(w, {  x  }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 0.1
                }
            });
        });*/
});
