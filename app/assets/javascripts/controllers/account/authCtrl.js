hbApp.controller("account/authCtrl", function($scope, $routeParams, $location, $http) {

  $scope.tabset = {
    signin: $location.path().match(/signin/),
    signup: $location.path().match(/signup/)
  }

  $scope.tabset.click = function(path) {
    $location.url("/account/" + path)
  }

  // Sign Up
  var SignUp = {};
  SignUp.User = {};
  SignUp.User.email = $routeParams.email;
  SignUp.submitting = false;

  SignUp.errors = [];
  SignUp.submit = function() {

    SignUp.submitting = true;

    $http.post("/users", {
      email: SignUp.User.email,
      password: SignUp.User.password,
    }).success(function(res) {
      $location.url("/account");

      SignUp.submitting = false;
    }).error(function(res) {
      SignUp.errors.push("Email taken or password invalid.");

      SignUp.submitting = false;
    })

  }

  // Sign In
  var SignIn = {};
  SignIn.errors = []
  SignIn.User = {};
  SignIn.submitting = false;

  SignIn.submit = function() {

    SignIn.submitting = true;

    $http.post("/sessions", {
      email: SignIn.User.email,
      password: SignIn.User.password,
    }).success(function(res) {
      $location.url("/account");

      SignIn.submitting = false;
    }).error(function(res) {
      SignIn.errors.push("Email or password invalid.");

      SignIn.submitting = false;
    })

  }

  // Attach scopes
  $scope.SignUp = SignUp;
  $scope.SignIn = SignIn;
})
