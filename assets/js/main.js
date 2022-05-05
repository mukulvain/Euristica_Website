(function ($) {
  "use strict";
  jQuery(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $(".sticky-header").addClass("fixed-top");
      } else {
        $(".sticky-header").removeClass("fixed-top");
      }
    });
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991.99",
      onePage: false,
    });
    $(".counter").counterUp({ delay: 10, time: 1000 });
    $(".countdown").downCount({ date: "12/15/2021 12:00:00", offset: +6 }, function () {
      console.log("Countdown done!");
    });
    $(".popup-link").magnificPopup({
      type: "iframe",
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          "</div>",
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
        srcAction: "iframe_src",
      },
    });
    $(".scrollup").on("click", function () {
      $("html").animate({ scrollTop: "0" }, 500);
    });
    $(window).on("scroll", function () {
      var toTopVisible = $("html").scrollTop();
      if (toTopVisible > 500) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });
    var $slider = $(".hero-slider-active");
    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement("div");
      sliderCounter.classList.add("slider_counter");
      var updateSliderCounter = function (slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).html(
          '<div class="slideActive">' +
            "0" +
            currentSlide +
            "</div>" +
            '<div class="totalSlide">' +
            "0" +
            slidesCount +
            "</div>"
        );
      };
      $slider.on("init", function (event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });
      $slider.on("afterChange", function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });
      $slider.slick({
        arrows: false,
        dots: true,
        fade: true,
        infinity: true,
        slidesToShow: 1,
      });
    }
    var hoverLayer = $(".hero-area2");
    var heroImgOne = $(".hero-area2 .hero_shapes .vec_1");
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgOne.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    $(".testi-slider-active").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<i class="fas fa-arrow-left slickArrow arrow-prev"></i>',
      nextArrow: '<i class="fas fa-arrow-right slickArrow  arrow-next"></i>',
      responsive: [{ breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
    });
    $(".sc_nav_wrapper a.nav-link").on("click", function () {
      let dot = $(".line span");
    });
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: { columnWidth: 2 },
    });
    $(".filter-button-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  });
  jQuery(window).on("load", function () {
    new WOW().init();
    $(".preloader").fadeOut(0);
  });
})(jQuery);
