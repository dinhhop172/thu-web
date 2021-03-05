// setInterval(function(){
//    var header = window.pageYOffset;
//    // console.log(header);
//    if(header >= 150){
//       backtop.classList.add('show');
//       backtop.classList.remove("hide");
//    }else{
//       backtop.classList.add('hide');
//       backtop.classList.remove("show");
//    }
// }, 500);

// alert(header);
$(document).ready(function () {

   $backtop = $('#back-top');
   $navId = $('#nav');
   $navClass = $('.nav');
   $logoMain = $('#logo-main');

   $(window).scroll(function (e) {
      $scroll_top = e.currentTarget.pageYOffset;
      // console.log($scroll_top);
      if ($scroll_top > 300) {
         $navId.addClass("sticky");
         // $navClass.addClass("sticky");
         setTimeout(function () {
            $width = $(window).width();
            if ($width < 1200) {
               $logoMain.addClass("sticky");
               $logoMain.addClass("bg-menu");
            } else {
               $logoMain.removeClass("sticky");
            }
         })
      } else {
         $navId.removeClass("sticky");
         $navClass.removeClass("sticky");
         $logoMain.removeClass("sticky");
      }

   });


   setInterval(function () {
      $width = $(window).width();
      if ($width < 768) {
         $('.custom-font').addClass('text-center');
         $('.marg').addClass('text-center');
      } else {
         $('.marg').removeClass('text-center');
         $('.custom-font').removeClass('text-center');
      }
   }, 1000);

   $backtop.on('click', function () {
      window.scroll({
         top: 0,
         behavior: "smooth",
      });
   });

   // -----slide main-----
   // $stt = 0;
   // $endImg = $(".slide-child:last").attr("idx");
   // console.log($endImg);
   // $(".next").click(function () {
   //    if (++$stt > $endImg) {
   //       $stt = 0;
   //    }
   //    $(".slide-child").hide(400);
   //    $(".slide-child").eq($stt).show(400);
   //    console.log($stt);
   // });

   // $(".prev").click(function () {
   //    if (--$stt < 0) {
   //       $stt = $endImg;
   //    }
   //    $(".slide-child").hide(400);
   //    $(".slide-child").eq($stt).show(400);
   // });

   // $timer = function () {
   //    setInterval(function () {
   //       $(".next").click();
   //    }, 5000);
   // };

   // $timer();
});
// -----end slide main-----
$(document).on("contextmenu", function (e) {
   e.preventDefault();
});
// -------------owl slide--------------------------
$('.owl-carousel1').owlCarousel({
   loop: true,
   items: 3,
   margin: 10,
   responsiveClass: true,
   autoplay: true,
   autoplayTimeout: 4500,
   autoplayHoverPause: true,
   nav: true,
   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      1200: {
         items: 3,
      }
   }
});

$('.owl-carousel2').owlCarousel({
   loop: true,
   margin: 0,
   items: 1,
   autoplay: true,
   autoplayTimeout: 4000,
   autoplayHoverPause: true,
   responsive: {
      0: {
         items: 1
      }
   }
})

$a = $(window).prop("clientWidth");
console.log($a);

////////////////menu-con///////////////////////
$(function () {
   $("#open").on('click', function () {
      $('.menu-con').slideDown('slow');
      $('.menu-con').css("overFlow", "scroll");
   });
   $("#close").on('click', function () {
      $('.menu-con').slideUp('slow');
   });
});

////////////////end-menu-con///////////////////////
// -------------end owl slide--------------------------
// $(document).keydown(function (event) {
//    if (event.keyCode == 123) // Prevent F12
//    { 
//        return false;
//    } 
//    else if(event.ctrlKey && event.shiftKey && event.keyCode == 73)
//    // Prevent Ctrl+Shift+I
//    {         
//        return false;
//    }
// });