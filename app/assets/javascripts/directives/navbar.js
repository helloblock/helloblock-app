hbApp.directive('navbar', function() {

  return {
    restrict: "E",
    templateUrl: "/templates/components/_navbar.html",
    transclude: true
  }
});
