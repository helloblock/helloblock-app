hbApp.controller("docs/tutorialsCtrl", function($scope, $routeParams) {

  $scope.currentTutorial = $routeParams.tutorial_file || 'getting-started'

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
})
