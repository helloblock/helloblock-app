hbApp.controller( "blockExplorer/propagateCtrl", function( $scope, HelloBlock ) {

  $scope.submitHex = function() {

  }

  // Dummy Data
  var defaultTxHash = "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3"
  HelloBlock.Transactions.get( {
    tx_hash: defaultTxHash
  }, function( res ) {
    $scope.transaction = res.data.transaction
  } )

} )
