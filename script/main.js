//nav

$('.menu-button').on("click", function () {
    $('.menu-links').addClass('open');
})

$('.close-btn').on("click", function () {
    $('.menu-links').removeClass('open');
})

//checkform = subscribe

function checkForm() {

    var email = document.getElementById('email');
    var filterE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ( !filterE.test(email.value)) {         
        alert('Please provide your valid name and email address');                   
        $("input#name").focus();
        return false; 
                   
    }
    else {         
        $("#subsModal").modal('show');  
        $("input#name").val("");
        $("input#email").val("");
        return false;    
    }
}

//lightslider

$('#bannerGallery').lightSlider({
    gallery: true,
    item: 1,
    mode: 'fade',
    loop: true,
    auto: true,
    speed: 2000, //ms'
    pause: 3000,
    thumbItem: 3,
    thumbMargin: 30,
    slideMargin: 0,
    useCSS: true,
    cssEasing: 'ease',
    enableDrag: false,
    currentPagerPosition: 'left',
});

//slick

$('.proj-sec-slider').slick({
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
});

$('.services-slider').slick({
    infinite: true,
    speed: 1000,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },

        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

$('.on-proj-sec-slider').slick({
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
});



$('.related-items-slider').slick({
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




//AOS
AOS.init({ disable: 'mobile' });