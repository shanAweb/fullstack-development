$(document).ready(function () {
  $("h1").css("color", "red");
  jQuery("h1").css("font-family", "Arial, sans-serif");
  $("button").css("font-family", "Arial, sans-serif");
  // event listener on jquery
  $("button").on("click", function () {
    $("button").css("color", "blue");
  });
});
