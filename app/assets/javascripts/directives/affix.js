hbApp.directive("affix", function() {
  return function($scope, element, attrs) {

    $(element).affix({
      offset: {
        top: $(element).offset().top - 40
      }
    })
  }
})
