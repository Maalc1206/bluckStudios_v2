let screen = window.screen.width;
console.log(`La resolución es de ${screen} pixeles`)

$(function(){
  if (screen <= 500) {
    $(".nav_ul").hide()

    $(".boton-menu").click(function () {
      $(".nav_responsive_ul").slideToggle()
    })
  }
  if (screen >= 1024){
    $(".nav_ul").show()
    $(".nav_responsive_ul").hide()
    $(".boton-menu").hide()
  }


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
        1024:{
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
  
if (document.body.id == "") {
  
}

  $('.proyects_container').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear'
  });
})