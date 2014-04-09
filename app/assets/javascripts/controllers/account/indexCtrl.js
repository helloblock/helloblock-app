hbApp.controller("account/indexCtrl", function($scope, $http, $location) {

  $scope.tokens = [];
  $scope.errors = []

  $scope.getTokens = function() {
    $http.get("/users/tokens")
      .success(function(data) {
        $scope.tokens = data.data;
      })
      .error(function(err) {
        $scope.errors.push("Something went wrong, please contact scott@helloblock.io")
      })
  }

  $scope.resetTokens = function() {
    $http.put("/users/tokens")
      .success(function(data) {
        $scope.getTokens()
      })
      .error(function(err) {
        $scope.errors.push("Something went wrong, please contact scott@helloblock.io")
      })
  }

  $scope.getTokens()

})
