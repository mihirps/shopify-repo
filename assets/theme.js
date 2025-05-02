// Section with Editor
$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});
$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "SlideShow") {
    $this.find('.hero-slider-active').SlideShow();
  }else if($this.data('section') == "TabWithProduct") {
    $this.find('.product-carousel-4').TabWithProduct();
  }else if($this.data('section') == "CollectionBanner") {
    $this.find('.product-banner-carousel').CollectionBanner();
  }else if($this.data('section') == "FeatureCollection") {
    $this.find('.product-carousel-4_2').FeatureCollectionActive();
  }else if($this.data('section') == "TestimonialSection") {
    $this.find('.testimonial-content-carousel').TestimonialContent();
    $this.find('.testimonial-thumb-carousel').TestimonialThumb();
  }else if($this.data('section') == "BannerWithCollection") {
    $this.BannerWithCollection();
  }else if($this.data('section') == "LatestBlog") {
    $this.find('.blog-carousel-active').LatestBlog();
  }else if($this.data('section') == "BrandLogo") {
    $this.find('.brand-logo-carousel').BrandLogoActive();
  }else if($this.data('section') == "CollectionThumbnail") {
    $this.find('.group-list-carousel--3').CollectionThumbnail();
  }else if($this.data('section') == "HotDeals") {
    $this.find('.deals-carousel-active').HotDeals();
  }else if($this.data('section') == "CollectionBannerSlideshow") {
    $this.find('.hero-slider-active-4').CollectionBannerSlideshow();
  }else if($this.data('section') == "HeaderSection") {
    $this.HeaderSection();
  }else if($this.data('section') == "CollectionTemplate") {
    $this.CollectionTemplateActivation();
  }else if($this.data('section') == "InstagramSlider") {
    $this.InstagramSection();
  }else if($this.data('section') == "ProductTemplate") {
    $this.ProductTemplate();
  }else if($this.data('section') == "FooterSection") {
    $this.FooterSection();
  }else if($this.data('section') == "FeaturedProduct") {
    $this.FeaturedProduct();
  }else if($this.data('section') == "InstagramAlternativeSlider") {
    $this.find('.instagram-alternative-carousel').InstagramAlternativeSlider();
  }else if($this.data('section') == "VideoSlider") {
    $this.VideoSlider();
  }else{}   
}

// Slideshow active js
$.fn.SlideShow = function() {
  var $SlideShowVAR = this;
  $SlideShowVAR.slick({
    fade: true,
    speed: 1000,
    dots: false,
    autoplay: false,
    lazyLoad: 'ondemand',prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
  // Background Image JS start
  var bgSelector = $(".bg-img-active");
  bgSelector.each(function (index, elem) {
    var element = $(elem),
        bgSource = element.data('bg');
    element.css('background-image', 'url(' + bgSource + ')');
  });
};
// Tab With Product active js
$.fn.TabWithProduct = function() {
  var $TabWithProductVAR = this;
  $TabWithProductVAR.slick({
    speed: 1000,
    adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// product banner active js
$.fn.CollectionBanner = function() {
  var $CollectionBannerVAR = this;
  $CollectionBannerVAR.slick({
    speed: 1000,
    arrows: false,});
};
// Featured Collection active js
$.fn.FeatureCollectionActive = function() {
  var $FeatureCollectionActiveVAR = this;
  if($FeatureCollectionActiveVAR.length > 0){
    $FeatureCollectionActiveVAR.slick({
      speed: 1000,
      adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
  };
};
// Testimonial active js
$.fn.TestimonialContent = function() {
  var $TestimonialContentVAR = this;
  $TestimonialContentVAR.slick({
    arrows: false,
    asNavFor: '.testimonial-thumb-carousel',});
};
$.fn.TestimonialThumb = function() {
  var $TestimonialThumbVAR = this;
  $TestimonialThumbVAR.slick({
    slidesToShow: 3,
    asNavFor: '.testimonial-content-carousel',
    centerMode: true,
    arrows: false,centerPadding: 0,
    focusOnSelect: true
  });
};
// Banner with collection active js
$.fn.BannerWithCollection = function() {
  $('.group-list-carousel').each(function () {
    var $this = $(this);
    var $arrowContainer = $(this).parent().siblings('.section-title-append').find('.slick-append');
    $this.slick({
      infinite: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',appendArrows: $arrowContainer
    });
  });
};
// Latest blog active js
$.fn.LatestBlog = function() {
  var $LatestBlogVAR = this;
  $LatestBlogVAR.slick({
    speed: 1000,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Brand logo active js
$.fn.BrandLogoActive = function() {
  var $BrandLogoVAR = this;
  $BrandLogoVAR.slick({
    speed: 1000,
    adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Collection Thumbnail active js
$.fn.CollectionThumbnail = function() {
  var $CollectionThumbnailVAR = this;
  $CollectionThumbnailVAR.slick({
    speed: 1000,
    adaptiveHeight: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Hot Deal active js
$.fn.HotDeals = function() {
  var $HotDealsVAR = this;
  $HotDealsVAR.slick({
    speed: 1000,
    adaptiveHeight: false,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};
// Collection Banner active js
$.fn.CollectionBannerSlideshow = function() {
  var $CollectionBannerSlideshowVAR = this;
  $CollectionBannerSlideshowVAR.slick({
    speed: 1000,
    arrows: false,});
};
// Header Section active js
$.fn.HeaderSection = function() {
  // offcanvas minicart button js
  $(".minicart-btn").on('click', function(){
    $("body").addClass('fix');
    $(".minicart-inner").addClass('show')
  })

  $(".offcanvas-close, .minicart-close,.offcanvas-overlay").on('click', function(){
    $("body").removeClass('fix');
    $(".minicart-inner").removeClass('show')
  });
  // Search trigger js
  $(".search-trigger").on('click', function(){
    $(".header-search-box").toggleClass('search-box-open');
  });
  // Sticky menu
  var $window = $(window);
  $window.on('scroll', function () {
    var scroll = $window.scrollTop();
    if (scroll < 300) {
      $(".sticky").removeClass("is-sticky");
    } else {
      $(".sticky").addClass("is-sticky");
    }
  });// Off Canvas Open close
  $(".mobile-menu-btn").on('click', function () {
    $("body").addClass('fix');
    $(".off-canvas-wrapper").addClass('open');
  });

  $(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
    $("body").removeClass('fix');
    $(".off-canvas-wrapper").removeClass('open');
  });

  // offcanvas mobile menu
  var $offCanvasNav = $('.mobile-menu'),
      $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length){
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
  });
  
  // Currency and Language
  class LocalizationForm extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
      };
      this.elements.button.addEventListener('click', this.openSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

      this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }

    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
    }

    onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;

      this.hidePanel();
      this.elements.button.focus();
    }

    onItemClick(event) {
      event.preventDefault();
      const form = this.querySelector('form');
      this.elements.input.value = event.currentTarget.dataset.value;
      if (form) form.submit();
    }

    openSelector() {
      this.elements.button.focus();
      this.elements.panel.toggleAttribute('hidden');
      this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }

    closeSelector(event) {
      const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
      if (event.relatedTarget === null || shouldClose) {
        this.hidePanel();
      }
    }
  }

  customElements.define('localization-form', LocalizationForm);
  
};
// Collection Template active js
$.fn.CollectionTemplateActivation = function() {
  // product view mode change js
  $('.product-view-mode a').on('click', function (e) {
    e.preventDefault();
    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');
    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid-view list-view').addClass(viewMode);
  });
};
// Instgram active js
$.fn.InstagramSection = function(){
  var activation = this.find('[data-username]'),
      activeId = activation.attr('id'),
      clientUsername = activation.attr('data-username'),
      instagramHastag = activation.attr('data-hashtag'),
      ItemsLimit = activation.attr('data-limit'),
      imageSize = activation.attr('data-size'),
      instaslider = ".instagram-carousel";

  $.instagramFeed({
    'tag': instagramHastag,
    'username': clientUsername,
    'container': "#"+activeId,
    'display_profile': false,
    'display_biography': false,
    'display_gallery': true,
    'styling': false,
    'items': ItemsLimit,
    'margin': 1,
    'image_size': imageSize
  });

  var $instagramNews = "#"+activeId+instaslider,
      $slidesToShow = activation.data('slidetoshow'),
      $slideshowtablet = activation.data('slideshowtablet'),
      $slideshowsmmobile = activation.data('slideshowsmmobile');

  $($instagramNews).on("DOMNodeInserted", function (e) {
    if (e.target.className == 'instagram_gallery') {
      $("." + e.target.className).slick({
        slidesToShow: $slidesToShow,
        slidesToScroll: 1,
        
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: $slideshowsmmobile,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: $slideshowtablet,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: $slideshowtablet,
            }
          }

        ]
      })
    }
  });  
};
// Product Template active js
$.fn.ProductTemplate = function() {
  // prodct details slider active
  $('.product-large-slider').slick({
    fade: true,
    arrows: false,asNavFor: '.pro-nav',
    draggable: false,
    swipeToSlide: false,
    touchMove: false
  });
  // product details slider nav active
  $('.pro-nav').slick({
    slidesToShow: 4,
    asNavFor: '.product-large-slider',
    speed: 1000,
    infinite: true,
    centerPadding: 0,
    focusOnSelect: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
  
  jQuery('<div class="quantity-button quantity-down dec qtybtn">-</div>').insertBefore('.quantity input');
  jQuery('<div class="quantity-button quantity-up inc qtybtn">+</div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  
  $('.single-product-countdown [data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
    });
  });
      
      var $window_2 = $(window);
      $window_2.on('scroll', function () {
        var scroll = $window_2.scrollTop();
        if (scroll < 500) {
          $(".product-addtocart-sticky").removeClass("is-sticky-2");
        } else {
          $(".product-addtocart-sticky").addClass("is-sticky-2");
        }
      });
};
// Footer Section active js
$.fn.FooterSection = function() {$('#privacyoption2').click(function () {
    //check if checkbox is checked
    if ($(this).is(':checked')) {
      $('#subscribe2').removeAttr('disabled'); //enable input
    } else {
      $('#subscribe2').attr('disabled', true); //disable input
    }
  });/* Slidebar collapse */ 
      if( $(window).width() < 767 ) {
        $('.widget-collapse h6').on("click", function(){
          $(this).siblings('.widget-collapse-hide').slideToggle();
          $(this).toggleClass('widget-collapse-show');
        });
      }
};
// Featured product active js
$.fn.FeaturedProduct = function() {
  $('.featured-product [data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
    });
  });
};
// Instagram Alternative active js
$.fn.InstagramAlternativeSlider = function() {
  var $InstagramAlternativeSliderVAR = this;
  $InstagramAlternativeSliderVAR.slick({
    speed: 1000,
    adaptiveHeight: false,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',});
};


// Video Slider active js
$.fn.VideoSlider = function() {
  
  /*------------------------------------
	    Autoplay Video Slider
	    ------------------------------------- */
      var slideWrapper = $(".autoplay-video_slider"),
          iframes = slideWrapper.find('.embed-player'),
          lazyImages = slideWrapper.find('.slide-image'),
          lazyCounter = 0;

      // POST commands to YouTube or Vimeo API
      function postMessageToPlayer(player, command) {
        if (player == null || command == null) return;
        player.contentWindow.postMessage(JSON.stringify(command), "*");
      }

      // When the slide is changing
      function playPauseVideo(slick, control) {
        var currentSlide, slideType, startTime, player, video;

        currentSlide = slick.find(".slick-current");
        slideType = currentSlide.attr("class").split(" ")[1];
        player = currentSlide.find("iframe").get(0);
        startTime = currentSlide.data("video-start");

        if (slideType === "youtube") {
          switch (control) {
            case "play":
              postMessageToPlayer(player, {
                "event": "command",
                "func": "mute"
              });
              postMessageToPlayer(player, {
                "event": "command",
                "func": "playVideo"
              });
              break;
            case "pause":
              postMessageToPlayer(player, {
                "event": "command",
                "func": "pauseVideo"
              });
              break;
          }
        }
      }

      // Resize player
      function resizePlayer(iframes, ratio) {
        if (!iframes[0]) return;
        var win = $(".autoplay-video_slider"),
            width = win.width(),
            playerWidth,
            height = win.height(),
            playerHeight,
            ratio = ratio || 16 / 9;

        iframes.each(function () {
          var current = $(this);
          if (width / ratio < height) {
            playerWidth = Math.ceil(height * ratio);
            current.width(playerWidth).height(height).css({
              left: (width - playerWidth) / 2,
              top: 0
            });
          } else {
            playerHeight = Math.ceil(width / ratio);
            current.width(width).height(playerHeight).css({
              left: 0,
              top: (height - playerHeight) / 2
            });
          }
        });
      }

      // DOM Ready
      $(function () {
        // Initialize
        slideWrapper.on("init", function (slick) {
          slick = $(slick.currentTarget);
          setTimeout(function () {
            playPauseVideo(slick, "play");
          }, 1000);
          resizePlayer(iframes, 16 / 9);
        });
        slideWrapper.on("beforeChange", function (event, slick) {
          slick = $(slick.$slider);
          playPauseVideo(slick, "pause");
        });
        slideWrapper.on("afterChange", function (event, slick) {
          slick = $(slick.$slider);
          playPauseVideo(slick, "play");
        });
        slideWrapper.on("lazyLoaded", function (event, slick, image, imageSource) {
          lazyCounter++;
          if (lazyCounter === lazyImages.length) {
            lazyImages.addClass('show');
            // slideWrapper.slick("slickPlay");
          }
        });

        //start the slider
        slideWrapper.slick({
          fade: true,
          autoplay: false,
          draggable: false,
          swipeToSlide: true,
          swipe: true,
          autoplaySpeed: 10000,
          lazyLoad: "progressive",
          pauseOnHover: false,
          pauseOnFocus: false,
          speed: 20,
          arrows: true,prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',dots: false,
          cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
        });
      });

      // Resize event
      $(window).on("resize.slickVideoPlayer", function () {
        resizePlayer(iframes, 16 / 9);
      });
  
};

// Find and comment out any custom lazy loading implementation like:
// initLazyLoad: function() {
//   $('.lazy-image').lazyload({...});
// },

(function($) {
  "use strict";
  jQuery(document).ready(function(){
	// tooltip active js
	$('[data-toggle="tooltip"]').tooltip();

    // Product grid color variant activation code. 
    $('.product-color li.color-swatch-li label').click(function(){
      $('li.color-swatch-li label').removeClass("active");
      jQuery(this).addClass('active');
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      var variantURL = jQuery(this).parent().find('.product-url a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage, srcset: variantImage });
      jQuery(this).parents('.product-wrapper').find('.product-name a').attr({ href: variantURL }); 
      jQuery(this).parents('.product-wrapper').find('.product-thumb-inner a').attr({ href: variantURL }); 
      return false;
    });


    $('.ajax-spin-cart-drawer').on('click', function() {
      setTimeout(function () {
        $('.minicart-inner').addClass('show');
      },1000);
    });

    
  });
})(jQuery);