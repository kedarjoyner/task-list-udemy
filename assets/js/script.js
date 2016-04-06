var init = function() {
    document.addEventListener('touchstart', handler, true);
    document.addEventListener('touchmove', handler, true);
    document.addEventListener('touchend', handler, true);
    document.addEventListener('touchcancel', handler, true);
};

var handler = function(event) {
    var touch = event.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvent');

    simulatedEvent.initMouseEvent(
         { touchstart: 'mousedown', touchmove: 'mousemove', touchend: 'mouseup' } [event.type],
         true, true, window, 1,
         touch.screenX, touch.screenY, touch.clientX, touch.clientY,
         false, false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
};

// Check off specific todos by clicking
// When li is clicked inside ul, run code
$("ul").on("click", "li", function(){
  var element = $(this);
  // effect only li that was clicked, hence "this"
  element.toggleClass("completed");
});

$("#sortable").sortable({
     "opacity": 0.6,
     "cursor" : "grab"
});

// Click on X to delete todo
// event tells span not to bubble up
$("#sortable").on("click", "span", function(event){
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
