const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      },
    640: {
      slidesPerView: 3,
      },
    960: {
      slidesPerView: 5,
      centeredSlides: true,
      },
    },
});

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});


$(function () {
  $(".catalog__tab").click(function () {
    $(".catalog__tab").each(function () {
      $(this).removeClass("catalog__tab-active");
    });
    $(this).addClass("catalog__tab-active");
  });
});