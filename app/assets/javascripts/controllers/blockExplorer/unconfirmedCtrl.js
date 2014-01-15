hbApp.controller( "blockExplorer/unconfirmedCtrl", function( $scope, HelloBlock ) {

  $scope.transactions = {
    unconfirmed: []
  }

  var transactionsChannel = PusherClient.subscribe( 'transactions' );

  // Callback: Lvl 1
  HelloBlock.Transactions.get( {
    tx_hash: "latest",
    limit: 100
  }, function( res ) {

    $scope.transactions.unconfirmed = res.data.transactions;

    // Callback: Lvl 1
    transactionsChannel.bind( 'unconfirmed', function( res ) {
      Pusher.beep();

      var tx = res.message;

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
    $scope.limit.unconfirmed += 5
  }

  $scope.$on( "$destroy", function() {
    transactionsChannel.unbind( "unconfirmed", function() {
      console.log( "unbinding..." )
    } )
  } )

} )
