$(window).scroll(function() {
if ($(this).scrollTop()>250) $('#scroll_menu').css({'opacity':'1', 'z-index':'999999','position':'fixed','top':'0px'});
else $('#scroll_menu').css({'opacity':'0', 'position':'absolute','top':'-55px'});
});