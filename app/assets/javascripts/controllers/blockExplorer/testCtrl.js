hbApp.controller( "blockExplorer/testCtrl", function( $scope, $resource, HelloBlock ) {

  $scope.unconfirmed = []

  var transactions = PusherClient.subscribe( 'transactions' );

  transactions.bind( 'unconfirmed', function( data ) {

    Pusher.beep();

    $scope.$apply( function() {
      $scope.unconfirmed.push( data )
    } )
  } );

} )
