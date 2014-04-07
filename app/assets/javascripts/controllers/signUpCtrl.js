hbApp.controller("signUpCtrl", function($scope, $routeParams, User) {

  // $routeParams default populate
  var Account = {}
  Account.email = $routeParams.email

  var Processor = {}
  Processor.errors = []
  Processor.submit = function() {
    if ($scope.signUpForm.$invalid) {
      var error = {
        message: "Something went wrong, we've been notified."
      }
      Processor.errors.push({})
      return false;
    }

    return User.create(Account.email, Account.password)

  }

  // Attach scopes
  $scope.Account = Account;
  $scope.Processor = Processor;
})
