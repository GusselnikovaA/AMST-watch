  
$(document).ready(function(){
  let heroButton = $('.hero__button');
  let order = $('.order');
  let close = $('.close');

  heroButton.on('click', function(){
    order.addClass('order_active');
  });
  close.on('click', function(){
    order.removeClass('order_active');
  });
});