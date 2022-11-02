// funciton will be executed when the document (aka the page) is ready:
$(document).ready(function () {
  // "slides" must matches the id in index.html
  $("#slides").superslides({
    animation: "fade",
    play: 5000, // 5000ms
    pagination: false,
  });
});
