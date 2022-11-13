// take 500ms before fading out the loading gif:
$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    // then backgournd fade out in 750ms:
    $(".loader").fadeOut(750);
  });

  // call Isotope plugin on the <ul> elmt:
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});

// funciton will be executed when the document (aka the page) is ready:
$(document).ready(function () {
  // "slides" must matches the id in index.html
  $("#slides").superslides({
    animation: "fade",
    play: 3600, // 5000ms
    pagination: false,
  });

  // typed through effect on subtitle using typed.js:
  var typed = new Typed(".typed", {
    strings: ["software engineer", "creative", "adaptive", "motivated"],
    typeSpeed: 100, // type speed in milliseconds
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  // technical skills carousel:
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      // < 480px, show 1 item
      0: {
        items: 1,
      },
      // >= 480px, show 2 items
      480: {
        items: 2,
      },
      // >= 768px, show 3 items
      768: {
        items: 3,
      },
      // >= 938px, show 4 items
      938: {
        items: 4,
      },
    },
  });

  const skillsTopOffset = $(".skills-section").offset().top;
  // console.log(skillsTopOffset);
  const statsTopOffset = $(".stats-section").offset().top;
  // console.log(statsTopOffset);
  let countUpFinished = false;

  $(window).scroll(function () {
    // show current y coordinate:
    // console.log(window.pageYOffset);

    // activat pie charts on scroll:
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      // matches the class="chart" in index.html:
      $(".chart").easyPieChart({
        // options to set a custom look for easy pie chart:
        easing: "easeInOut", // easing function or string with the name of a jQuery easing function
        barColor: "#fff", // the color of the curcular bar
        trackColor: false, // the color of the track, or false to disable rendering
        scaleColor: false, // the color of the scale lines, false to disable rendering
        lineWidth: 4, // width of the chart line in px
        size: 152, // size of the pie chart in px (matches the canvas height/width in index.js)
        onStep: function (from, to, percent) {
          // onStep: reader will increase as the curcular bar loads
          $(this.el).find(".percent").text(Math.round(percent)); // matches class="percent" in index.html
        },
      });
    }

    // count stats number up on scroll:
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").each(function () {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal);
      });
      countUpFinished = true;
    }
  });

  $("[data-fancybox]").fancybox();

  // filter items:
  $("#filters a").click(function () {
    // finding the element that currently has the "current" class applied and removing it:
    $("#filters .current").removeClass("current");
    // then assign the "current" class to the button we clicked:
    $(this).addClass("current");

    var selector = $(this).attr("data-filter"); // eg: selector = ".apps" or ".me" or ...

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });

    return false; // stop doing normal default action inside the click handler
  });

  // smooth transition to section on link click:
  $("#navigation li a").click(function (e) {
    e.preventDefault(); // prevent the default action of jumping to the section
    const targetElmt = $(this).attr("href"); // "#about", "#skills", "#stats", ...
    const targetPosition = $(targetElmt).offset().top;
    // jQurey: select html and body elements, scrollTop: 50px above the targetPosition
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  // sticking nav bar on scroll：
  const nav = $("#navigation");
  const navTop = nav.offset().top;
  $(window).on("scroll", stickyNavigation);
  function stickyNavigation() {
    const body = $("body");
    if ($(window).scrollTop() >= navTop) {
      // padding-top property sets the top padding (space) of the body elmt
      // nav.outerHeight() is the height of the nav bar (a number):
      body.css("padding-top", nav.outerHeight() + "px");

      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
