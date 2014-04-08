hbApp.controller("account/settingsCtrl", function($scope, $routeParams, Account) {

  $scope.change = $routeParams.change === "true" ? true : false

  $scope.Settings = new Account({
    endpoint: "/users/update",
    redirectTo: "/account/settings?change=true",
    errorMsg: "Password change failed."
  })

})
