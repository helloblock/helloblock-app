hbApp.controller("account/authCtrl", function($scope, $routeParams, $location) {

  $scope.tabset = {
    signin: $location.path().match(/signin/),
    signup: $location.path().match(/signup/)
  }

  // $routeParams default populate

  // Sign Up
  var SignUp = {};
  SignUp.User = {}

  SignUp.errors = [];
  SignUp.submit = function() {
    if ($scope.signUpForm.$invalid) {
      return false;
    }

    $http.post("/users", {
      email: email,
      password: password,
    }).success(function(res) {
      $location.path("/account")
    }).error(function(res) {

    })

  }

  // Sign In
  var SignIn = {};
  SignIn.User = {}

  // Attach scopes
  $scope.SignUp = SignUp;
  $scope.SignIn = SignIn;
})
