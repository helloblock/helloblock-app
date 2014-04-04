hbApp.controller("dashboard/indexCtrl", function($scope, $http, Session) {
  // Header Cookies
  // _helloblock_session
  // authenticity_token

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
