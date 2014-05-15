hbApp.controller("docs/tutorialsCtrl", function($scope, $routeParams, $http) {

  $scope.currentTutorial = $routeParams.tutorial_file || 'how-to-build-a-wallet-1'

  $scope.tutorials = [{
    name: "Build a Wallet (Part 1)",
    file: "how-to-build-a-wallet-1"
  }, {
    name: "Build a Wallet (Part 2)",
    file: "how-to-build-a-wallet-2"
  }]

  $scope.tutorialUrl = function(tutorial) {
    var base = "/templates/docs/tutorials"
    var tutorial = "/" + tutorial + ".html"
    var url = base + tutorial;
    return url;
  }

  // TODO: Refactor
  var User = {}
  User.email;

  User.emailSuccess = false;
  User.submitting = false
  User.signUp = function(email) {
    if (!email) return;
    if (User.emailSuccess) return;

    User.submitting = true
    $http.post("/email", {
      email: email
    })
      .success(function(data) {
        User.emailSuccess = true;
        User.submitting = false;
      })
      .error(function(err) {
        User.submitting = false;
      });

    // $location.path("/account/signup").search({
    //  email: email
    // })
  }

  $scope.User = User;

})
