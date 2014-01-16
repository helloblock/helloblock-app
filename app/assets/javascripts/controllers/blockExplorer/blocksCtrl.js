hbApp.controller( "blockExplorer/blocksCtrl", function( $scope, $routeParams, $location, HelloBlock ) {

  var identifier = 168058

  if ( $routeParams.identifier ) {
    if ( $routeParams.identifier.match( /^\d+$/ ) ) {
      identifier = parseInt( $routeParams.identifier );
    } else {
      identifier = $routeParams.identifier
    }
  }

  $scope.block = {
    index: identifier,
    identifier: identifier,
    transactions: []
  }

  HelloBlock.Blocks.get( {
    identifier: $scope.block.identifier
  }, function( res ) {
    var data = res[ "data" ][ "block" ]
    $scope.block.index = data.block_height;
    $scope.block = $.extend( {}, $scope.block, data );
  }, function( err ) {
    $location.path( "/testnet" ).search( {
      error: 'true'
    } )
  } )

  // Infinite Scrolling

  $scope.limitTo = {
    transactions: 5,
  }

  $scope.loadMoreTransactions = function() {
    $scope.limitTo.transactions += 5
  }

} )
