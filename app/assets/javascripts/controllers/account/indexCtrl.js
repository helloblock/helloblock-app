hbApp.controller("account/indexCtrl", function($scope, $http) {
  $scope.res = {}

  $scope.button = function() {
    var session = Session.debug();

    session.then(function(res) {
      $scope.res = res
    }, function(res) {
      $scope.res = res
    })
  }
})
