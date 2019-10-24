
  $(document).ready(function() {
    $('.countdown').downCount({
      date: '10/30/2019 00:00:00',
      offset: +3,
      selectors: {
    canvas_seconds: 'canvas_seconds',
    canvas_minutes: 'canvas_minutes',
    canvas_hours: 'canvas_hours',
},
seconds: {
    borderColor: '#7995D5',
    borderWidth: '6'
},
minutes: {
    borderColor: '#ACC742',
    borderWidth: '6'
},
hours: {
    borderColor: '#ECEFCB',
    borderWidth: '6'
}}, function () {
      $('#timer').css('display', 'none');
    });
  });