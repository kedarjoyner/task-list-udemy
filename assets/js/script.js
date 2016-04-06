
// Check off specific todos by clicking
// When li is clicked inside ul, run code
$("ul").on("click", "li", function(){
  var element = $(this);
  // effect only li that was clicked, hence "this"
  element.toggleClass("completed");
});

// $("#sortable").sortable({
//      "opacity": 0.6,
//      "cursor" : "grab"
// });

// Click on X to delete todo
// event tells span not to bubble up
$("ul").on("click", "span", function(event){
  var element = $(this);
  // parent() gives us the li
  // fadeOut needs callback function of remove in order
  // to remove li after it fades out
  element.parent().fadeOut(500, function(){
    // this is referring to li here, not span, so can't use element
    $(this).remove();
  });
  event.stopPropagation();
});

// Add click listener to submit button
$("#form").submit(function(event){
  event.preventDefault();
  // grabs new task text from input
  var newTask = $("#input-box").val();
  $("ul").append("<li><span><i class='ion-close-round'></i></span> " + newTask + "</li>");
    // empties input value
    $("#input-box").val("");
});

// form submits already on enter

$(".ion-plus-round").click(function() {
  $("#form").fadeToggle();
});
