hbApp.controller("account/indexCtrl", function($scope, Account) {

  $scope.tokens = []

  Account.getTokens(function(err, data) {
    $scope.tokens = data;
  })

})
