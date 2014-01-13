hbApp.controller( "blockExplorer/testCtrl", function( $scope, $resource, HelloBlock ) {

  HelloBlock.Transactions.get( {
    tx_hashes: [ "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3", 1 ]
  }, function( res, headers ) {
    $scope.response = res //[ "data" ][ "transaction" ]
  }, function( responseWithHeaders ) {
    $scope.response = res //[ "data" ]
  } )

} )
