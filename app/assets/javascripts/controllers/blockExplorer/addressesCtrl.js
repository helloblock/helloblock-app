hbApp.controller( "blockExplorer/addressesCtrl", function( $scope, HelloBlock ) {

  $scope.address = {
    base58: "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo",
    transactions: [],
    unspents: []
  }

  // Callback: Lvl 1
  HelloBlock.Addresses.get( {
    address: $scope.address.base58
  }, function( res ) {

    $scope.address = $.extend( {}, $scope.address, res.data.address );

    var unspents_tx_hashes = $scope.address.unspents.map( function( i ) {
      return i.tx_hash;
    } )

    // Callback: Lvl 2
    HelloBlock.Transactions.get( {
      "tx_hash[]": unspents_tx_hashes
    }, function( res ) {

      $scope.address.unspent_transactions = res.data.transactions

    }, function( err ) {
      console.log( "error!", err )
    } )

    // Callback: Lvl 2
    var addressListener = PusherClient.subscribe( 'addresses' );

    addressListener.bind( $scope.address.base58, function( res ) {
      Pusher.beep();

      var tx = JSON.parse( res.message )

      $scope.$apply( function() {
        $scope.address.transactions.unshift( tx )
      } )
    } );

  }, function( err ) {
    console.log( "error!", err )
  } )

  $scope.loadMoreTransactions = function() {
    $scope.limit.transactions += 1
  }

  $scope.loadMoreUnspents = function() {
    $scope.limit.unspents += 1
  }

  $scope.limit = {
    transactions: 5,
    unspents: 5
  }

} )
