hbApp.directive('subnav', function($rootScope) {

  return {
    restrict: "E",
    scope: {
      selected: "=",
      global: "="
    },
    templateUrl: "/templates/components/_subnav.html",
    transclude: true
  }
});

hbApp.directive('docnav', function($rootScope) {

  return {
    restrict: "E",
    scope: {
      selected: "=",
      global: "="
    },
    templateUrl: "/templates/components/_docnav.html",
    transclude: true
  }
});

hbApp.directive('accnav', function($rootScope) {

  return {
    restrict: "E",
    scope: {
      selected: "=",
      global: "="
    },
    templateUrl: "/templates/components/_accnav.html",
    transclude: true
  }
});
