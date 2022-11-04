// funciton will be executed when the document (aka the page) is ready:
$(document).ready(function () {
  // "slides" must matches the id in index.html
  $("#slides").superslides({
    animation: "fade",
    play: 2600, // 5000ms
    pagination: false,
  });

  // typed through effect on subtitle using typed.js:
  var typed = new Typed(".typed", {
    strings: ["creative", "adaptive", "motivated"],
    typeSpeed: 120, // type speed in milliseconds
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

  var skillsTopOffset = $(".skills-section").offset().top;
  $(window).scroll(function () {
    // console.log(window.pageYOffset);
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
  });
});
