$(function () {

  $(".header-top__menu a").on("click", function (event) {
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 300) $('.header-top').removeClass('header-top--active');
    // else $('.header-top__menu').addClass('header-top__menu--active');
  });

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });
    $('#toTop').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 800);
    });
  });

  $(".menu-btn").on("click", function(){
    $(".header-top").toggleClass("header-top--active");
  });
  
  


});