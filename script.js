$('document').ready(function(){

$('.text').hide();
$('.about-page').hide();
$('.view-projects').hide();

$('body').on('mouseleave', function(){
  $('.text').hide();
  $('.projects').css('background-color', 'rgba(184, 208, 215, 0.3)');
  $('.about').css('background-color', 'rgba(157,140,149,0.3)');
})

$('.about').on('mouseenter', function(){
  $('.text').eq(0).show();
  $('.text').eq(1).hide();
  $('.about').css('background-color', 'rgba(184, 208, 215, 0.3)');
  $('.projects').css('background-color', 'rgba(157,140,149,0.3)');
})

$('.projects').on('mouseenter', function(){
  $('.text').eq(1).show();
  $('.text').eq(0).hide();
  $('.projects').css('background-color', 'rgba(184, 208, 215, 0.3)');
  $('.about').css('background-color', 'rgba(157,140,149,0.3)');
})

$('.about').click(function(){
  $('.about-page').show();
  $('.name').css('color', 'rgba(200,200,200,0.6)');
  $('.about').hide();
  $('.projects').hide();
})

$('.projects').click(function(){
  $('.view-projects').show();
  $('.name').css('color', 'rgba(200,200,200,0.6)');
  $('.about').hide();
  $('.projects').hide();
})

$('.return-home').click(function(){
  $('.view-projects').hide();
  $('.about-page').hide();
    $('.name').css('color', 'rgba(160,160,160,0.6)');
  $('.about').show();
  $('.projects').show();
})


});
