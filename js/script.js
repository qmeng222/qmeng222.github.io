// funciton will be executed when the document (aka the page) is ready:
$(document).ready(function () {
  // "slides" must matches the id in index.html
  $("#slides").superslides({
    animation: "fade",
    play: 5000, // 5000ms
    pagination: false,
  });

  // typed through effect on subtitle using typed.js:
  var typed = new Typed(".typed", {
    strings: ["creative", "adaptive", "motivated"],
    typeSpeed: 100, // type speed in milliseconds
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});
