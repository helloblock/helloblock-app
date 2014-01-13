hbApp.controller( "blockExplorer/addressesCtrl", function( $scope, HelloBlock ) {

  $scope.address = {
    base58: "mzPkw5EdvHCntC2hrhRXSqwHLHpLWzSZiL",
    transactions: [],
    unspents: []
  }

  HelloBlock.Addresses.get( {
    address: $scope.address.base58
  }, function( res ) {

    $scope.address = $.extend( {}, $scope.address, res[ "data" ][ "address" ] );

    var unspents_tx_hashes = $scope.address.unspents.map( function( i ) {
      return i.tx_hash;
    } )

    HelloBlock.Transactions.get( {
      "tx_hash[]": unspents_tx_hashes
    }, function( res ) {

      debugger
      $scope.address.unspent_transactions = res[ "data" ][ 'transactions' ]
    }, function( err ) {
      console.log( "error!", err )
    } )

  }, function( err ) {
    console.log( "error!", err )
  } )

} )
