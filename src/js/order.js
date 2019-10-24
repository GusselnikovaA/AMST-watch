  
$(document).ready(function(){
  var heroButton = $('.hero__button');
  var order = $('.order_dekstop');
  var close = $('.close');

  heroButton.on('click', function(){
    order.addClass('order_active');
  });
  close.on('click', function(){
    order.removeClass('order_active');
  });
});