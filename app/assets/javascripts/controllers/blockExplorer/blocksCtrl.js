hbApp.controller( "blockExplorer/blocksCtrl", function( $scope, HelloBlock ) {

  $scope.block = {
    height: 160001,
    transactions: []
  }

  HelloBlock.Blocks.get( {
    identifier: $scope.block.height
  }, function( res ) {
    $scope.block = $.extend( {}, $scope.block, res[ "data" ][ "block" ] );
  }, function( err ) {

  } )

} )
