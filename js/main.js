$(function(){
  $(".boton-menu").click(function () {
    $(".nav_responsive_ul").slideToggle()
  })

  $('.areas-container.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:0,
    loop:true,
    nav: true,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        1080:{
            items:3,
            nav:true,
        }
    }
  });
  
  $('.galery_container').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear'
  });

  
})