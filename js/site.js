function responsiveToggle () {
  $('#mobile-menu').on('click', function () {
    $('#nav-bar-menu').slideToggle()
  })
}
$(document).ready(function () {
  responsiveToggle()
})
