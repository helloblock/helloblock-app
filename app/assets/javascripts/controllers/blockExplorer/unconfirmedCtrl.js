hbApp.controller( "blockExplorer/unconfirmedCtrl", function( $scope ) {

  HelloBlock.Transactions.get( {
    tx_hash: "latest"
  }, function( data ) {
    $scope.unconfirmed_transactions = []

    var transactionsListerer = PusherClient.subscribe( 'transactions' );

    transactionsListerer.bind( 'unconfirmed', function( res ) {
      Pusher.beep();

      var tx = JSON.parse( res.message )

      $scope.$apply( function() {
        $scope.unconfirmed_transactions.unshift( tx )
      } )
    } );
  }, function( err ) {
    console.log( err )
  } )

} )
