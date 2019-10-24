    // Скрипт слайдера
    $(document).ready(function () {
      // СЛАЙДЕР В БЛОКЕ FEEDBACK декстоп
      $('.feedback-slider_dekstop').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
        prevArrow: $('.feedback-arrows__left'),
        nextArrow: $('.feedback-arrows__right'),
      });

    // СЛАЙДЕР В БЛОКЕ FEEDBACK мобильный 
    $('.feedback-slider_mobile').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      arrows: true,
      prevArrow: $('.feedback-arrows__left'),
      nextArrow: $('.feedback-arrows__right'),
    });
    });