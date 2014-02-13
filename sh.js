jQuery('.views-field img').each(function(){
var url = jQuery(this).attr('src').replace('dev', 'www')
jQuery(this).attr('src', url)
})
