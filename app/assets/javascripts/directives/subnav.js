hbApp.directive( 'subnav', function( $rootScope ) {

  return {
    restrict: "E",
    scope: {
      selected: "=",
      global: "="
    },
    templateUrl: "/templates/components/_subnav.html",
    transclude: true
  }
} );
