hbApp.controller( "blockExplorer/transactionsCtrl", function( $scope, HelloBlock ) {

  $scope.transaction = {
    tx_hash: "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3"
  }

  HelloBlock.Transactions.get( {
    tx_hash: $scope.transaction.tx_hash
  }, function( res ) {
    $scope.transaction = $.extend( {}, $scope.transaction, res[ "data" ][ "transaction" ] );

  }, function( err ) {
    console.log( "error", err )
  } )

} )
