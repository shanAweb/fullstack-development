$(document).ready(function () {
  $("h1").css("color", "red");
  jQuery("h1").css("font-family", "Arial, sans-serif");
  $("button").addClass("button-container btn");

  // event listener on jquery
  $("button").on("click", function () {
    $(this).css("color", "blue");
  });
});
