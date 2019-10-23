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