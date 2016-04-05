

// Check off specific todos by clicking
$("li").click(function(){
  var element = $(this);
  // effect only li that was clicked, hence "this"
  element.toggleClass("completed");
});

// Click on X to delete todo
// event tells span not to bubble up
$("span").click(function(event){
  var element = $(this);
  // parent gives us the li
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
    console.log("enter!");
  }
});
