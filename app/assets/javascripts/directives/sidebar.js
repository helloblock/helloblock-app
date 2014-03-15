hbApp.directive('sidebar', function() {

  return {
    restrict: "E",
    scope: {
      resources: "="
    },
    templateUrl: "/templates/components/_sidebar.html",
    transclude: true
  }
});
