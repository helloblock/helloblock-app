hbApp.controller("testCtrl", function($scope, $window) {
  $(window).scroll(function(e) {
    console.log(e, $window.scrollY)
  })
})
