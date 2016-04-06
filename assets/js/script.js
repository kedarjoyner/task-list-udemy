

// Check off specific todos by clicking
// When li is clicked inside ul, run code
$("ul").on("click", "li", function(){
  var element = $(this);
  // effect only li that was clicked, hence "this"
  element.toggleClass("completed");
});

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

// Add click listener to input
// event holds all the info about the keypress
$("input[type=text]").keypress(function(event){

  // which refers to code of key that was pressed
  if(event.which === 13) {

    // grabs new task text from input
    var newTask = $(this).val();

    // empties input value
    var emptyInput = $(this).val("");
    $("ul").append("<li><span><i class='ion-close-round'></i></span> " + newTask + "</li>");
  }
});

$(".ion-plus-round").click(function() {
  $("input[type=text]").fadeToggle();
});

$("#sortable").sortable({
    'opacity': 0.6,
});
