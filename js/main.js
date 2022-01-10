$(function(){
  
  $('.certificate__list').slick({
    responsive: [
        {
            breakpoint: 1000000,
            settings: "unslick"
        },
        {
            breakpoint: 1213,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
        },
        {
            breakpoint: 935,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
        },
        {
            breakpoint: 656,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        } 
]
  });

  $('a').on('click', function (event) {
    let $anchor = $(this);
    $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr('href')).offset().top +50,
      },
      {
        duration: 1000,
        specialEasing: {
          width: 'linear',
          heigth: 'easyInOutCubic'
        },
      }
    )
    event.preventDefault();
  });

  $('button[data-popup="1"]').on('click', function () {
    $('.popup').toggleClass('popup--active');
    $('.overlay').toggleClass('overlay--active');
  });

  $('.popup__close-btn').on('click', function () {
    $('.popup').removeClass('popup--active');
    $('.overlay').removeClass('overlay--active');
  });

  $('.overlay').on('click',function () {
    $('.popup').removeClass('popup--active');
    $('.overlay').removeClass('overlay--active');
  });


  $('.treatment__right-item-btn-1').on('click', function () {
    $('.treatment__right-item-content-1').toggleClass('treatment__right-item-content-1--active');
    $('.treatment__right-item-btn-1').toggleClass('treatment__right-item-btn-1--active');
    $('.treatment__right-item-btn-1').toggleClass('arrow--active');
  });
  
  $('.treatment__right-item-btn-2').on('click', function () {
    $('.treatment__right-item-content-2').toggleClass('treatment__right-item-content-2--active');
    $('.treatment__right-item-btn-2').toggleClass('treatment__right-item-btn-2--active');
    $('.treatment__right-item-btn-2').toggleClass('arrow--active');
  });
  
  $('.treatment__right-item-btn-3').on('click', function () {
    $('.treatment__right-item-content-3').toggleClass('treatment__right-item-content-3--active');
    $('.treatment__right-item-btn-3').toggleClass('treatment__right-item-btn-3--active');
    $('.treatment__right-item-btn-3').toggleClass('arrow--active');
  });
  
  $('.treatment__right-item-btn-4').on('click', function () {
    $('.treatment__right-item-content-4').toggleClass('treatment__right-item-content-4--active');
    $('.treatment__right-item-btn-4').toggleClass('treatment__right-item-btn-4--active');
    $('.treatment__right-item-btn-4').toggleClass('arrow--active');
  });

});