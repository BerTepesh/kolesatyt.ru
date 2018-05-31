(function() {

}());

function getGridSize(cols) {
  if(cols == 4) {
    return ($(window).innerWidth() < 768) ? 1 :
        ($(window).innerWidth() < 992) ? 2 :
          ($(window).innerWidth() < 1200) ? 3 : 4;
  }
  return ($(window).innerWidth() < 576) ? 1 :
    ($(window).innerWidth() < 768) ? 2 :
    ($(window).innerWidth() < 992) ? 3 :
      ($(window).innerWidth() < 1200) ? 4 : 5
};
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $(".slider-line").each(function(){
    $(this).find('.slider-line__holder').on('init', function(event, slick){
      var stHeight = $(this).find('.slick-track').height();
      $(this).find('.slick-slide').css('height',stHeight + 'px' );
    });
  });
  $('.spinner button:last-of-type').on('click', function() {
    $(this).closest('.spinner').find('.input').val( parseInt($(this).closest('.spinner').find('input').val(), 10) + 1);
    return false;
  });
  $('.spinner button:first-of-type').on('click', function() {
    if(parseInt($(this).closest('.spinner').find('.input').val()) >= 2) {
      $(this).closest('.spinner').find('.input').val( parseInt($(this).closest('.spinner').find('input').val(), 10) - 1);
      return false;
    }
    return false;
  });
});
