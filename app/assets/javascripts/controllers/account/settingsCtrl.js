hbApp.controller("account/settingsCtrl", function($scope, $routeParams, Processor) {

  $scope.change = $routeParams.change === "true" ? true : false

  $scope.Settings = new Processor({
    endpoint: "/users/update",
    redirectTo: "/account/settings?change=true",
    errorMsg: "Password change failed."
  })

})
