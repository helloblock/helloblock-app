hbApp.controller( "blockExplorer/blocksCtrl", function( $scope, $routeParams, HelloBlock ) {

  var defaultIdentifer = 168058
  var identifier;

  if ( $routeParams.identifier ) {
    if ( $routeParams.identifier.match( /^\d+$/ ) ) {
      identifier = parseInt( $routeParams.identifier );
    } else {
      identifier = $routeParams.identifier
    }
  }

  $scope.block = {
    identifier: identifier || defaultIdentifer,
    transactions: []
  }

  HelloBlock.Blocks.get( {
    identifier: $scope.block.identifier
  }, function( res ) {
    $scope.block = $.extend( {}, $scope.block, res[ "data" ][ "block" ] );
  }, function( err ) {

  } )

} )
