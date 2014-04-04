hbApp.controller("signUpCtrl", function($scope, $routeParams) {

  // $routeParams default populate
  var Account = {}
  Account.email = $routeParams.email

  var Processor = {}
  Processor.errors = []
  Processor.submit = function() {
    if (true) {
      var error = {
        message: "Something went wrong, we've been notified."
      }
      Processor.errors.push({})
      return false;
    }
  }

  // Attach scopes
  $scope.Account = Account;
  $scope.Processor = Processor;
})
