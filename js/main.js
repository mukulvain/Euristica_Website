function pad(num) {
  num = num.toString();
  if (num.length == 1) num = "0" + num;
  return num;
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  // let today = new Date(),
  //     dd = String(today.getDate()).padStart(2, "0"),
  //     mm = String(today.getMonth() + 1).padStart(2, "0"),
  //     yyyy = today.getFullYear(),
  //     nextYear = yyyy,
  //     dayMonth = "04/01/",
  //     birthday = dayMonth + yyyy;

  // today = mm + "/" + dd + "/" + yyyy;
  // if (today > birthday) {
  //   birthday = dayMonth + nextYear;
  // }
  //end

  // const countDown = new Date(2022, 3, 15, 15, 0, 0).getTime(),
  document.getElementById("headline").innerText = "Events Started!!";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("content").style.display = "block";

  // x = setInterval(function() {

  //   const now = new Date().getTime(),
  //         distance = countDown - now;
  //         console.log(distance)
  //         try{
  //           document.getElementById("days").innerText = pad(Math.floor(distance / (day))),
  //           document.getElementById("hours").innerText = pad(Math.floor((distance % (day)) / (hour))),
  //           document.getElementById("minutes").innerText = pad(Math.floor((distance % (hour)) / (minute))),
  //           document.getElementById("seconds").innerText = pad(Math.floor((distance % (minute)) / second));
  //         }

  //         catch(err){
  //           //pass
  //         }

  //   //do something later when date is reached
  //   if (distance < 0) {
  //     clearInterval(x);
  //   }
  //   //seconds
  // }, 3000)
})();

jQuery(document).ready(function ($) {
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300, "easeInOutExpo");
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Real view height for mobile devices
  // if (window.matchMedia("(max-width: 767px)").matches) {
  //   $('#intro').css({ height: $(window).height() });
  // }

  // Initiate the wowjs animation library
  // new WOW().init();

  // Initialize Venobox
  // $('.venobox').venobox({
  //   bgcolor: '',
  //   overlayColor: 'rgba(6, 12, 34, 0.85)',
  //   closeBackground: '',
  //   closeColor: '#fff'
  // });

  // Initiate superfish on nav menu
  // $('.nav-menu').superfish({
  //   animation: {
  //     opacity: 'show'
  //   },
  //   speed: 400
  // });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container").clone().prop({
      id: "mobile-nav",
    });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: "",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function (e) {
      $(this).next().toggleClass("menu-item-active");
      $(this).nextAll("ul").eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          100,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  let url = window.location.href;
  let index = url.indexOf("#");
  if (index !== -1 && url.slice(index) !== "#") {
    var target = $(url.slice(index));
    if (target.length) {
      var top_space = 0;

      if ($("#header").length) {
        top_space = $("#header").outerHeight();

        if (!$("#header").hasClass("header-fixed")) {
          top_space = top_space - 20;
        }
      }

      $("html, body").animate(
        {
          scrollTop: target.offset().top - top_space,
        },
        100,
        "easeInOutExpo"
      );

      if ($(this).parents(".nav-menu").length) {
        $(".nav-menu .menu-active").removeClass("menu-active");
        $(this).closest("li").addClass("menu-active");
      }

      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        $("#mobile-body-overly").fadeOut();
      }
      return false;
    }
  }
});