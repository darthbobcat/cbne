var responsiveToggle = function(){
    $('#fixed-nav-menu-button').on('click',function(){
      $('#fixed-nav-menu').slideToggle();
    });
}
$( document ).ready(function(){
  responsiveToggle();
});
