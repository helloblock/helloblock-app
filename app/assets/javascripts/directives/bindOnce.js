hbApp.directive('bindOnce', function($timeout) {
  return {
    scope: true,
    link: function($scope) {
      $timeout(function() {
        $scope.$destroy();
      }, 0);
    }
  }
});
