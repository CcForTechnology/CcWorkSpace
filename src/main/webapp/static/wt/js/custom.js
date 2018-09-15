/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Preloader
-Scroll Animation
-Animated Entrances
-ToTop
-Video player
-Loader blocks
-Accordion
-Tooltip
-Switch catalog
-Zoom Images
-Select customization
-Enumerator
-Datepicker
-Countdown
-Main slider
-Thumbnail sliders
-OWL Sliders
-Image animation
*/



$(document).ready(function() {

    "use strict";


/////////////////////////////////////////////////////////////////
// SETTING
/////////////////////////////////////////////////////////////////
    
    
    $( '#dl-menu' ).dlmenu();
    


/////////////////////////////////////////////////////////////////
// Preloader
/////////////////////////////////////////////////////////////////


    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');


/////////////////////////////////////
//  Scroll Animation
/////////////////////////////////////


if ($('.scrollreveal').length > 0) {
    window.sr = ScrollReveal({
        reset:true,
        duration: 1000,
        delay: 200
    });

    sr.reveal('.scrollreveal');
  }



//////////////////////////////
// Parallax(Stellar)
//////////////////////////////

if ($('.stellar').length > 0) {
    $.stellar({
        responsive: true
    });
}



//////////////////////////////
// ToTop
//////////////////////////////
    
     $(document).on("click", "#toTop", function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

/////////////////////////////////////
//  Video player
/////////////////////////////////////


if ($('.player').length > 0) {
  $(".player").flowplayer();
}



/////////////////////////////////////
//  Loader blocks
/////////////////////////////////////


  $( ".js-scroll-next" ).on( "click", function() {

      var hiddenContent =  $( ".js-scroll-next + .js-scroll-content") ;

      $(".js-scroll-next").hide() ;
      hiddenContent.show() ;
      hiddenContent.addClass("animated");
      hiddenContent.addClass("animation-done");
      hiddenContent.addClass("bounceInUp");

  });



/////////////////////////////////////////////////////////////////
// Accordion
/////////////////////////////////////////////////////////////////

  $(".btn-collapse").on('click', function () {
          $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
          $(this).parents('.panel').addClass('panel-default');
          if ($(this).is(".collapsed")) {
              $('.panel-title').removeClass('panel-passive');
          }
          else {$(this).next().toggleClass('panel-passive');
      };
  });




/////////////////////////////////////
//  Tooltip
/////////////////////////////////////


  $('.link-tooltip-1').tooltip({
    template: '<div class="tooltip tooltip-1" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });
    $('.link-tooltip-2').tooltip({
    template: '<div class="tooltip tooltip-2" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });



/////////////////////////////////////
//  Switch catalog
/////////////////////////////////////


if ($('.btns-switch').length > 0) {
  $('.btns-switch__item').on( 'click', function() {
    $('.btns-switch').find('.active').removeClass('active');
    $( this ).addClass('active');
  });

  $('.js-view-th').on( 'click', function() {
    $('.list-goods').addClass('list-goods_list');
  });

  $('.js-view-list').on( 'click', function() {
    $('.list-goods').removeClass('list-goods_list');
  });
}



/////////////////////////////////////
//  Zoom Images
/////////////////////////////////////

  if ($('.js-zoom-gallery').length > 0) {
      $('.js-zoom-gallery').each(function() { // the containers for all your galleries
          $(this).magnificPopup({
              delegate: '.js-zoom-gallery__item', // the selector for gallery item
              type: 'image',
              gallery: {
                enabled:true
              },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
          });
      });
    }


  if ($('.js-zoom-images').length > 0) {
      $('.js-zoom-images').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });

    }




/////////////////////////////////////
// Select customization
/////////////////////////////////////

if ($('.selectpicker').length > 0) {

  $('.selectpicker').selectpicker({
    style: 'ui-select',
    styleBase: ''
  });
}



/////////////////////////////////////
// Enumerator
/////////////////////////////////////

if ($('.enumerator').length > 0) {
    $(".js-minus_btn").on('click', function() {
        var inputEl = jQuery(this).parent().children().next();
        var qty = inputEl.val();
        if (jQuery(this).parent().hasClass("js-minus_btn"))
            qty++;
        else
            qty--;
        if (qty < 0)
            qty = 0;
        inputEl.val(qty);
    });


    $(".js-plus_btn").on('click', function() {
        var inputEl = jQuery(this).parent().children().next();
        var qty = inputEl.val();
        if (jQuery(this).hasClass("js-plus_btn"))
            qty++;
        else
            qty--;
        if (qty < 0)
            qty = 0;
        inputEl.val(qty);
    });
  }


/////////////////////////////////////////////////////////////////
//Datepicker
/////////////////////////////////////////////////////////////////

if ($('.js-pickmeup').length > 0) {
  $('.js-pickmeup').pickmeup({
    flat  : true
  });
}





////////////////////////////////////////////
// Main slider
///////////////////////////////////////////


    if ($('#main-slider').length > 0) {

        var sliderWidth = $("#main-slider").data("slider-width");
        var sliderHeigth = $("#main-slider").data("slider-height");
        var sliderArrows = $("#main-slider").data("slider-arrows");
        var sliderButtons = $("#main-slider").data("slider-buttons");

        $( '#main-slider' ).sliderPro({
            width:  sliderWidth,
            height: sliderHeigth,
            arrows: sliderArrows,
            buttons: sliderButtons,
            fade: true,
            fullScreen: true,
            touchSwipe: false,
            autoplay: true
        });
    }



////////////////////////////////////////////
// Thumbnail sliders
///////////////////////////////////////////

  if ($('.slider-pro').length > 0) {

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
         $(".slider-pro").sliderPro("resize");
    });

    $( '.slider-thumbnail' ).sliderPro({
      width: 540,
      height: 540,
      orientation: 'horizontal',
      loop: false,
      arrows: false,
      buttons: false,
      thumbnailsPosition: 'bottom',
      thumbnailPointer: true,
      thumbnailWidth: 80,
      thumbnailHeight: 80,
      thumbnailArrows: true,
      autoplay: true,
      breakpoints: {
        1199: {
          width: 300,
          height: 300,
          thumbnailWidth: 50,
          thumbnailHeight: 50
        }
      }
    });

    $( '.slider-thumbnail-2' ).sliderPro({
      width: 1780,
      height: 800,
      orientation: 'horizontal',
      loop: false,
      arrows: true,
      buttons: false,
      thumbnailsPosition: 'bottom',
      thumbnailPointer: true,
      thumbnailWidth: 100,
      thumbnailHeight: 60,
      thumbnailArrows: false,
      autoplay: true,
      breakpoints: {
        767: {
          thumbnailWidth: 50,
          thumbnailHeight: 30
        }
      }
    });

    $( '.slider-thumbnail-3' ).sliderPro({
      width: 660,
      height: 580,
      orientation: 'horizontal',
      loop: false,
      arrows: false,
      buttons: false,
      thumbnailsPosition: 'left',
      thumbnailPointer: true,
      thumbnailWidth: 80,
      thumbnailHeight: 80,
      thumbnailArrows: false,
      autoplay: true,
      breakpoints: {
        767: {
          thumbnailsPosition: 'bottom'
        }
      }
    });
  }

/////////////////////////////////////////////////////////////////
// OWL Sliders
/////////////////////////////////////////////////////////////////

    var Core = {

        initialized: false,

        initialize: function() {

                if (this.initialized) return;
                this.initialized = true;

                this.build();

        },

        build: function() {

        // Owl Carousel

            this.initOwlCarousel();
        },
        initOwlCarousel: function(options) {

            $(".enable-owl-carousel").each(function(i) {
                var $owl = $(this);

                var itemsData = $owl.data('items');
                var centerData = $owl.data('center');
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var marginData = $owl.data('margin');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var min480 = $owl.data('min480');
                var min768 = $owl.data('min768');
                var min992 = $owl.data('min992');
                var min1200 = $owl.data('min1200');

                $owl.owlCarousel({
                    responsiveClass:true,
                    nav : navigationData,
                    dots: paginationData,
                    margin : marginData,
                    autoplayTimeout : autoPlayData,
                    autoplayHoverPause: stopOnHoverData,
                    navText : ["<i></i>","<i></i>"],
                    items: itemsData,
                    loop: true,
                    autoplay: false,
                    center: centerData,
                    responsive: {
                      0: {items: 1},
                      768: {items: min768},
                      992: {items: min992},
                      1200: {items: min1200}
                    },
                    afterInit: function(elem){
                                if(mainSliderData){
                                        setTimeout(function(){
                                                $('.main-slider_zoomIn').css('visibility','visible').removeClass('zoomIn').addClass('zoomIn');
                                                $('.main-slider_fadeInLeft').css('visibility','visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                                $('.main-slider_fadeInLeftBig').css('visibility','visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                                $('.main-slider_fadeInRightBig').css('visibility','visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                                        }, afterInitDelay);
                                    }
                    },
                    beforeMove: function(elem){
                        if(mainSliderData){
                                $('.main-slider_zoomIn').css('visibility','hidden').removeClass('zoomIn');
                                $('.main-slider_slideInUp').css('visibility','hidden').removeClass('slideInUp');
                                $('.main-slider_fadeInLeft').css('visibility','hidden').removeClass('fadeInLeft');
                                $('.main-slider_fadeInRight').css('visibility','hidden').removeClass('fadeInRight');
                                $('.main-slider_fadeInLeftBig').css('visibility','hidden').removeClass('fadeInLeftBig');
                                $('.main-slider_fadeInRightBig').css('visibility','hidden').removeClass('fadeInRightBig');
                        }
                    },
                    afterMove: sliderContentAnimate,
                    afterUpdate: sliderContentAnimate,
                });
            });

            function sliderContentAnimate(elem){
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if(mainSliderData){
                    setTimeout(function(){
                        $('.main-slider_zoomIn').css('visibility','visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility','visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility','visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility','visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility','visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility','visible').addClass('fadeInRightBig');
                    }, afterMoveDelay);
                }
            }
        },

    };

    Core.initialize();

////////////////////////////////////////////
// Image animation
///////////////////////////////////////////

(function() {
  var tiltSettings = [
  {},
  {
    movement: {
      imgWrapper : {
        translation : {x: 10, y: 10, z: 30},
        rotation : {x: 0, y: -10, z: 0},
        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
      },
      lines : {
        translation : {x: 10, y: 10, z: [0,70]},
        rotation : {x: 0, y: 0, z: -2},
        reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
      },
      caption : {
        rotation : {x: 0, y: 0, z: 2},
        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
      },
      overlay : {
        translation : {x: 10, y: -10, z: 0},
        rotation : {x: 0, y: 0, z: 2},
        reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
      },
      shine : {
        translation : {x: 100, y: 100, z: 0},
        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
      }
    }
  },
  {
    movement: {
      imgWrapper : {
        rotation : {x: -5, y: 10, z: 0},
        reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
      },
      caption : {
        translation : {x: 30, y: 30, z: [0,40]},
        rotation : {x: [0,15], y: 0, z: 0},
        reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
      },
      overlay : {
        translation : {x: 10, y: 10, z: [0,20]},
        reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
      },
      shine : {
        translation : {x: 100, y: 100, z: 0},
        reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
      }
    }
  },
  {
    movement: {
      imgWrapper : {
        rotation : {x: -5, y: 10, z: 0},
        reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
      },
      caption : {
        translation : {x: 20, y: 20, z: 0},
        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
      },
      overlay : {
        translation : {x: 5, y: -5, z: 0},
        rotation : {x: 0, y: 0, z: 6},
        reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
      },
      shine : {
        translation : {x: 50, y: 50, z: 0},
        reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
      }
    }
  },
  {
    movement: {
      imgWrapper : {
        translation : {x: 0, y: -8, z: 0},
        rotation : {x: 3, y: 3, z: 0},
        reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
      },
      lines : {
        translation : {x: 15, y: 15, z: [0,15]},
        reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
      },
      overlay : {
        translation : {x: 0, y: 8, z: 0},
        reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
      },
      caption : {
        translation : {x: 10, y: -15, z: 0},
        reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
      },
      shine : {
        translation : {x: 50, y: 50, z: 0},
        reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
      }
    }
  },
  {
    movement: {
      lines : {
        translation : {x: -5, y: 5, z: 0},
        reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
      },
      caption : {
        translation : {x: 15, y: 15, z: 0},
        rotation : {x: 0, y: 0, z: 3},
        reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
      },
      overlay : {
        translation : {x: 15, y: -15, z: 0},
        reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
      },
      shine : {
        translation : {x: 50, y: 50, z: 0},
        reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
      }
    }
  },
  {
    movement: {
      imgWrapper : {
        translation : {x: 5, y: 5, z: 0},
        reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
      },
      caption : {
        translation : {x: 10, y: 10, z: [0,50]},
        reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
      },
      shine : {
        translation : {x: 50, y: 50, z: 0},
        reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
      }
    }
  },
  {
    movement: {
      lines : {
        translation : {x: 40, y: 40, z: 0},
        reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
      },
      caption : {
        translation : {x: 20, y: 20, z: 0},
        rotation : {x: 0, y: 0, z: -5},
        reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
      },
      overlay : {
        translation : {x: -30, y: -30, z: 0},
        rotation : {x: 0, y: 0, z: 3},
        reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
      },
      shine : {
        translation : {x: 100, y: 100, z: 0},
        reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
      }
    }
  }];

  function init() {
    var idx = 0;
    [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) {
      idx = pos%2 === 0 ? idx+1 : idx;
      new TiltFx(el, tiltSettings[idx-1]);
    });
  }

  // Preload all images.
  imagesLoaded(document.querySelector('body'), function() {
    document.body.classList.remove('loading');
    init();
  });

})();


});
