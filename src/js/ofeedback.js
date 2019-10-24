$(document).ready(function(){
  var feedbackButton = $('.info-rating__button');
  var feedback = $('.feedback_dekstop');
  var close = $('.close');

  feedbackButton.on('click', function(){
    feedback.addClass('feedback_active');
    $('.feedback-slider_dekstop').slick('refresh');
  });
  close.on('click', function(){
    feedback.removeClass('feedback_active');
  });
});