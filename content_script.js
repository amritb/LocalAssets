chrome.storage.sync.get('value', function(items){
  var host = window.location.host;
  for (var key in items.value) {
    var obj = items.value[key];
    for (var prop in obj) {
      console.log(prop + '= ' + obj[prop]);
      if(host === obj.d) {
        jQuery('img').each(function(){
          var url = jQuery(this).attr('src').replace(obj.f, obj.r);
          jQuery(this).attr('src', url);
        });
      }
    }
  };
});
