hbApp.controller( "blockExplorer/transactionsCtrl", function( $scope, $routeParams, $location, HelloBlock ) {

  var defaultTxHash = "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3"

  $scope.transaction = {
    tx_hash: $routeParams.tx_hash || defaultTxHash,
    n: parseInt( $routeParams.n )
  }

  HelloBlock.Transactions.get( {
    tx_hash: $scope.transaction.tx_hash
  }, function( res ) {

    $scope.transaction = $.extend( {}, $scope.transaction, res.data.transaction );

    $scope.transaction.total_inputs = sumInputs( $scope.transaction[ "in" ] )
    $scope.transaction.total_outputs = sumOutputs( $scope.transaction[ "out" ] )

  }, function( err ) {
    console.log( "error", err )
    $location.path( "/testnet" ).search( {
      error: 'true'
    } )
  } )

  // Should this be in main API?
  var sumInputs = function( txIns ) {
    total = 0;
    txIns.forEach( function( i ) {
      total += i.prev_out.value
    } )
    return total
  }

  var sumOutputs = function( txOuts ) {
    total = 0;
    txOuts.forEach( function( i ) {
      total += i.value
    } )

    return total
  }

} )
