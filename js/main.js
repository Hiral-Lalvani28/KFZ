    function hover(e) {
        if (e.id == 'facebook') {
            e.setAttribute('src', 'images/facebook_hover.png');
        } else if ((e.id == 'youtube')) {
            e.setAttribute('src', 'images/youtube_hover.png');
        }

    }

    function unhover(e) {
        if (e.id == 'facebook') {
            e.setAttribute('src', 'images/footer-facebook.png');
        } else if ((e.id == 'youtube')) {
            e.setAttribute('src', 'images/footer-youtube.png');
        }
    }


    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
        } else {
          $('nav').removeClass('shrink');
        }
      });




    $(document).ready(function () {
        $('#plan-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoHeight: true,
            navText: [
                '<i style="font-size:40px;" class="fa fa-angle-left arrow-position-left color-green color-white" aria-hidden="true"></i>',
                '<i style="font-size:40px;" class="fa fa-angle-right arrow-position-right color-green color-white" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 3
                },
            }
        })
    });

   

    $(document).ready(function () {
        $('#online-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left " aria-hidden="true"></i>',
                '<i class="fa fa-angle-right " aria-hidden="true"></i>'
            ],
            navContainer: '.online-nav',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        })
    });

    $(document).ready(function () {
        $('#feature-carousel').owlCarousel({
            loop: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1025: {
                    items: 3
                },
            }
        })
    });





    $(document).ready(() => {
        $('section.sticky-section').css({ 'transform': 'translateY(0%)' })
    })
    $(window).scroll(() => {
        let position = $('footer').offset().top - $(window).height()

        if ($(window).scrollTop() >= position) {
            $('section.sticky-section').css({ 'transform': 'translateY(100%)' })
        } else {
            $('section.sticky-section').css({ 'transform': 'translateY(0%)' })
        }
    })





    


    $(window).scroll(() => {
        let position, height, sticky_timeout


        position = $('.bg-white').offset().top
        height = position + $('.bg-white').height() + $('#traffic-expand').height()

        clearTimeout(sticky_timeout)
        if ($(window).scrollTop() >= position && $(window).scrollTop() <= height) {
            $('#orange-data').css({ 'display': 'block' })
            $('#green-data').css({ 'display': 'block' })

        } else {
            $('#orange-data').css({ 'display': 'none' })
            $('#green-data').css({ 'display': 'none' })

        }
    })

 


    
    
    
    
    