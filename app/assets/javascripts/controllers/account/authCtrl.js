hbApp.controller("authCtrl", function($scope, $routeParams, User) {

  var action = $routeParams.action;

  $scope.tabset = {
    signin: action === "signin",
    signup: action === "signup"
  }

  // $routeParams default populate
  var Account = {}
  Account.email = $routeParams.email

  // Sign Up
  var SignUp = {};
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

  // Attach scopes
  $scope.Account = Account;
  $scope.SignUp = SignUp;
  $scope.SignIn = SignIn;
})
