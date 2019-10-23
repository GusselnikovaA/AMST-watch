
    // Скрипт слайдера
    $(document).ready(function () {
      // СЛАЙДЕР В БЛОКЕ FEEDBACK
      $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
        prevArrow: $('.feedback-arrows__left'),
        nextArrow: $('.feedback-arrows__right'),
      });
      });

      // СЛАЙДЕР В БЛОКЕ HERO mobile 
      // $('.hero-slider_mobile').slick({
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   autoplay: true,
      //   autoplaySpeed: 3000,
      //   infinite: true,
      //   speed: 2000,
      //   arrows: false,
      //   dots: true,
      // });