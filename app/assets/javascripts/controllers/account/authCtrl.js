hbApp.controller("account/authCtrl", function($scope, $location, $http, Processor, $routeParams) {

  $scope.tabset = {
    signin: $location.path().match(/signin/),
    signup: $location.path().match(/signup/)
  }

  $scope.tabset.click = function(path) {
    $location.url("/account/" + path)
  }

  $scope.SignUp = new Processor({
    email: $routeParams.email,
    endpoint: "/users",
    redirectTo: "/account",
    errorMsg: "Email taken or password invalid.",
  })

  $scope.SignIn = new Processor({
    endpoint: "/sessions",
    redirectTo: "/account",
    errorMsg: "Email or password invalid.",
  })

})
