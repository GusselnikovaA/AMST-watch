$(document).ready(function(){
  let feedbackButton = $('.info-rating__button');
  let feedback = $('.feedback_dekstop');
  let close = $('.close');

  feedbackButton.on('click', function(){
    feedback.addClass('feedback_active');
    $('.feedback-slider').slick('refresh');
  });
  close.on('click', function(){
    feedback.removeClass('feedback_active');
  });
});