$(document).ready(function(){
    //banner_lider_part
    $('.all_banner_slider').slick({
        arrows: true,
        prevArrow:'<i class="fa-solid fa-chevron-left"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right"></i>',
        autoplay: true,
        infinite:true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots:true,
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            //   }
            // }
          ]
    });
    //team_slider_part
    $('.all_team_slider').slick({
        arrows: true,
        prevArrow:'<i class="fa-solid fa-chevron-left"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right"></i>',
        autoplay: true,
        infinite:true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots:true,
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            //   }
            // }
          ]
    });
    //testimonial_slider_part
    $('.testimonial_text_slider').slick({
        arrows: false,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
    new VenoBox({
        selector: '.my-video-links',
    });
});
