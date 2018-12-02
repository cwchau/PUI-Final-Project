// Functions to dynamically display certain projects to help user narrow down options

// Code adapted from https://mdbootstrap.com/plugins/jquery/gallery/
$(function() {
var selectedClass = "";

$(".filter").click(function(){
  selectedClass = $(this).attr("data-rel");

  // Based on my own image structure, I used the common class 'card' to capture
  // all the images and check whether they are in the 'selectedClass' (all,1, or 2)
  let cards = $(".card").not("."+selectedClass)
  console.log(cards)
  cards.fadeOut().removeClass('animation');

  // Once there is a selection, this function helps bring back the other elements
  // that will apply to the next category selection
  setTimeout(function() {
  console.log("selected: ", selectedClass);
  $("."+selectedClass).fadeIn().addClass('animation');
  console.log("fadeIn: " + selectedClass);
  $("#gallery-images").fadeTo("slow", 1);
  }, 300);
});
});
