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

  chrome.storage.sync.get('value', function(items){
    if(items['value']['A1']['d'] !== '') $('#d1').val(items['value']['A1']['d']);
    if(items['value']['A1']['f'] !== '') $('#f1').val(items['value']['A1']['f']);
    if(items['value']['A1']['r'] !== '') $('#r1').val(items['value']['A1']['r']);

    if(items['value']['A2']['d'] !== '') $('#d2').val(items['value']['A2']['d']);
    if(items['value']['A2']['f'] !== '') $('#f2').val(items['value']['A2']['f']);
    if(items['value']['A2']['r'] !== '') $('#r2').val(items['value']['A2']['r']);

    if(items['value']['A3']['d'] !== '') $('#d3').val(items['value']['A3']['d']);
    if(items['value']['A3']['f'] !== '') $('#f3').val(items['value']['A3']['f']);
    if(items['value']['A3']['r'] !== '') $('#r3').val(items['value']['A3']['r']);

    if(items['value']['A4']['d'] !== '') $('#d4').val(items['value']['A4']['d']);
    if(items['value']['A4']['f'] !== '') $('#f4').val(items['value']['A4']['f']);
    if(items['value']['A4']['r'] !== '') $('#r4').val(items['value']['A4']['r']);

    if(items['value']['A5']['d'] !== '') $('#d5').val(items['value']['A5']['d']);
    if(items['value']['A5']['f'] !== '') $('#f5').val(items['value']['A5']['f']);
    if(items['value']['A5']['r'] !== '') $('#r5').val(items['value']['A5']['r']);
  });
});
