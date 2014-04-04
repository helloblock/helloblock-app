hbApp.controller("dashboard/indexCtrl", function($scope, $http) {
  // Header Cookies
  // _helloblock_session
  // authenticity_token

  $scope.res = {}

  $scope.button = function() {
    $http.get("/sessions/debug")
      .success(function(res) {
        $scope.res = res.session
      })
      .error(function(res) {
        $scope.res = res.session
      })
  }
})
