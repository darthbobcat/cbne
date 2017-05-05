var responsiveToggle = function(){
    $('#top-responsive-menu').on('click',function(){
      $('#menu-actual').fadeToggle();
    });
}
$( document ).ready(function(){
  responsiveToggle();
});
