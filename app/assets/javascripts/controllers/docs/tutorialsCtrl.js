hbApp.controller( "docs/tutorialsCtrl", function( $scope, $routeParams ) {

  $scope.currentTutorial = $routeParams.tutorial_file || 'getting-started'

  $scope.tutorials = [ {
    name: "Getting Started",
    file: "getting-started"
  }, {
    name: "Sending a Transaction",
    file: "send-transaction"
  }, {
    name: "Building a Wallet",
    file: "wallet"
  }, {
    name: "Testing with testnet",
    file: "testing"
  } ]

  $scope.tutorialUrl = function( tutorial ) {
    var base = "/templates/docs/tutorials"
    var tutorial = "/" + tutorial + ".html"
    var url = base + tutorial;
    console.log( url )
    return url;
  }
} )
