hbApp.controller( "blockExplorer/unconfirmedCtrl", function( $scope ) {

  // TODO: HelloBlock.Transactions.get()
  $scope.unconfirmed_transactions = []

  // Callback: Lvl 2
  var transactionsListerer = PusherClient.subscribe( 'transactions' );

  transactionsListerer.bind( 'unconfirmed', function( res ) {
    Pusher.beep();

    var tx = JSON.parse( res.message )

    $scope.$apply( function() {
      $scope.unconfirmed_transactions.unshift( tx )
    } )
  } );

} )
