var responsiveToggle = function(){
    $('#fixed-nav-menu-button').on('click',function(){
      $('#main-nav-menu').slideToggle();
    });
}
$( document ).ready(function(){
  responsiveToggle();
});
