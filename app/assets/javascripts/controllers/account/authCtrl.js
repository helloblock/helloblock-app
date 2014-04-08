hbApp.controller("account/authCtrl", function($scope, $routeParams, $location, $http) {

  $scope.tabset = {
    signin: $location.path().match(/signin/),
    signup: $location.path().match(/signup/)
  }

  // Sign Up
  var SignUp = {};
  SignUp.User = {};
  SignUp.User.email = $routeParams.email;

  SignUp.errors = [];
  SignUp.submit = function() {

    $http.post("/users", {
      email: SignUp.User.email,
      password: SignUp.User.password,
    }).success(function(res) {
      $location.url("/account")
    }).error(function(res) {
      SignUp.errors.push("Email taken or password invalid.")
    })

  }

  // Sign In
  var SignIn = {};
  SignIn.User = {}

  // Attach scopes
  $scope.SignUp = SignUp;
  $scope.SignIn = SignIn;
})
