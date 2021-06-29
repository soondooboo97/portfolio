$(window).scroll(function () {
    var scr = $(window).scrollTop();

    var sec2 = $(".section2").offset().top;
    if (scr >= sec2 / 2) {
        $('.skill-bar div').addClass('active');
    } else {
        $('.skill-bar div').removeClass('active');
    }


    var sec1 = $(".section1").offset().top;
    if (scr >= sec1 / 2) {
        $('.text h1').addClass('active');
        $('.text h3').addClass('active');
        $('.text h4').addClass('active');
    } else {
        $('.text h1').removeClass('active');
        $('.text h3').removeClass('active');
        $('.text h4').removeClass('active');
    }

});

$('.box > .inner-box > img').click(function () {
    var img = $(this).attr('src');
    $('.section4 > .gray-bg').addClass('active');
    $(".gray-bg > .img-wrap").addClass('active');
    $('.gray-bg > .img-wrap > img').attr('src', img);


    if ($('.gray-bg > .img-wrap > img').height() >= $(window).height()){
        $('.gray-bg > .img-wrap > img').height( $(window).height()*0.8);
    }
});

$('.section4 > .gray-bg').click(function () {
    $('.gray-bg').removeClass('active');
    $(".gray-bg > .img-wrap").removeClass('active');

});

if ($(window).width() < 700) {
    console.log("sss");
    $('.gray-bg > .img-wrap > img').width("80vw");
    
}

var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



$(function(){
   
    var radius = $('.swiper-slide img').css('border-radius');
    $('.text-hover-box').css({'border-radius':radius});
    
    
    
    
    
    
    
    
    
});