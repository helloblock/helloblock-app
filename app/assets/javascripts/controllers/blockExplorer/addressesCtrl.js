hbApp.controller( "blockExplorer/addressesCtrl", function( $scope, $routeParams, $location, HelloBlock ) {

  var defaultAddress = "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo"

  $scope.address = {
    base58: $routeParams.address || defaultAddress,
    transactions: [],
    unspents: []
  }

  var addressChannel = PusherClient.subscribe( 'addresses' );

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
    addressChannel.bind( $scope.address.base58, function( res ) {
      Pusher.beep();

      var tx = res.message

      $scope.$apply( function() {
        $scope.address.transactions.unshift( tx )
      } )
    } );

  }, function( err ) {
    console.log( "error!", err )
    $location.path( '/testnet/' )
  } )

  // Infinite Scrolling

  $scope.limit = {
    transactions: 5,
    unspents: 5
  }

  $scope.loadMoreTransactions = function() {
    $scope.limit.transactions += 5
  }

  $scope.loadMoreUnspents = function() {
    $scope.limit.unspents += 5
  }

  $scope.$on( "$destroy", function() {
    PusherClient.unsubscribe( "addresses" )
  } )

} )
