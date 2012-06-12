//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  $("#legalpad_link").on('click', function() {
    $("#container").removeClass("notepad");
    $("#container").addClass("legalpad");
  });
  $("#notepad_link").on('click', function() {
    $("#container").removeClass("legalpad");
    $("#container").addClass("notepad");
  });
});