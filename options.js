$(function() {
  $( "#settingsForm" ).submit(function( event ) {
    // alert( "Handler for .submit() called." );
    var data = {
      'A1': {
        'd': $('#d1').val(),
        'f': $('#f1').val(),
        'r': $('#r1').val()
      },
      'A2': {
        'd': $('#d2').val(),
        'f': $('#f2').val(),
        'r': $('#r2').val()
      },
      'A3': {
        'd': $('#d3').val(),
        'f': $('#f3').val(),
        'r': $('#r3').val()
      },
      'A4': {
        'd': $('#d4').val(),
        'f': $('#f4').val(),
        'r': $('#r4').val()
      },
      'A5': {
        'd': $('#d5').val(),
        'f': $('#f5').val(),
        'r': $('#r5').val()
      }
    }
    chrome.storage.sync.set({'value': data});
    var message = '<div class="alert alert-info"><span class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;Data saved</div>';
    $('.messages').html(message);
    event.preventDefault();
  });
});
