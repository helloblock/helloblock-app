hbApp.controller( "docs/tutorialsCtrl", function( $scope, $routeParams ) {

  $scope.currentTutorial = $routeParams.tutorial || 'getting-started'

  $scope.tutorials = [ {
    name: "Getting Started",
    file: "getting-started"
  }, {
    name: "Sending a Transaction",
    file: "send-transaction"
  }, ]

  $scope.tutorialUrl = function( tutorial ) {
    var base = "/templates/docs/tutorials"
    var tutorial = "/" + tutorial + ".html"
    var url = base + tutorial;
    console.log( url )
    return url;
  }
} )
