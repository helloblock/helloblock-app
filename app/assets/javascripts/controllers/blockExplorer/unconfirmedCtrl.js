hbApp.controller( "blockExplorer/unconfirmedCtrl", function( $scope, HelloBlock ) {

  $scope.transactions = {
    unconfirmed: []
  }

  // Callback: Lvl 1
  HelloBlock.Transactions.get( {
    tx_hash: "latest"
  }, function( res ) {

    $scope.transactions.unconfirmed = res.data.transactions;

    var transactionsListener = PusherClient.subscribe( 'transactions' );

    // Callback: Lvl 1
    transactionsListener.bind( 'unconfirmed', function( res ) {
      Pusher.beep();

      var tx = res.message;
      console.log( tx )
      $scope.$apply( function() {
        $scope.transactions.unconfirmed.unshift( tx )
      } )

    } );
  }, function( err ) {
    console.log( err )
  } )

  $scope.limit = {
    unconfirmed: 5
  }

  $scope.loadMoreTransactions = function() {
    $scope.limit.unconfirmed += 1
  }

} )
