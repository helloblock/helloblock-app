hbApp.controller( "blockExplorer/blocksCtrl", function( $scope, $routeParams, HelloBlock ) {

  var defaultIdentifer = 168058

  $scope.block = {
    identifer: $routeParams.identifier || defaultIdentifer,
    transactions: []
  }

  HelloBlock.Blocks.get( {
    identifier: $scope.block.identifer
  }, function( res ) {
    $scope.block = $.extend( {}, $scope.block, res[ "data" ][ "block" ] );
  }, function( err ) {

  } )

} )
