jQuery('.views-field img').each(function(){

  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });

  var url = jQuery(this).attr('src').replace('dev', 'www');
  jQuery(this).attr('src', url);
});
