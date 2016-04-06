

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


(function( $ ) {

    $.support.touch = typeof Touch === 'object';

    if (!$.support.touch) {
        return;
    }

    var proto =  $.ui.mouse.prototype,
    _mouseInit = proto._mouseInit;

    $.extend( proto, {
        _mouseInit: function() {
            this.element
            .bind( "touchstart." + this.widgetName, $.proxy( this, "_touchStart" ) );
            _mouseInit.apply( this, arguments );
        },

        _touchStart: function( event ) {
            if ( event.originalEvent.targetTouches.length != 1 ) {
                return false;
            }

            this.element
            .bind( "touchmove." + this.widgetName, $.proxy( this, "_touchMove" ) )
            .bind( "touchend." + this.widgetName, $.proxy( this, "_touchEnd" ) );

            this._modifyEvent( event );

            $( document ).trigger($.Event("mouseup")); //reset mouseHandled flag in ui.mouse
            this._mouseDown( event );

            return false;
        },

        _touchMove: function( event ) {
            this._modifyEvent( event );
            this._mouseMove( event );
        },

        _touchEnd: function( event ) {
            this.element
            .unbind( "touchmove." + this.widgetName )
            .unbind( "touchend." + this.widgetName );
            this._mouseUp( event );
        },

        _modifyEvent: function( event ) {
            event.which = 1;
            var target = event.originalEvent.targetTouches[0];
            event.pageX = target.clientX;
            event.pageY = target.clientY;
        }

    });

})( jQuery );

$("ul").sortable({
    'containment': 'parent',
    'opacity': 0.6,
});
