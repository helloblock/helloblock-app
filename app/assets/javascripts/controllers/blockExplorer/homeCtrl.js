hbApp.controller( "blockExplorer/homeCtrl", function( $scope, HelloBlock ) {

  // Defaults
  $scope.transactions = {
    unconfirmed: []
  }

  $scope.blocks = {
    latest: []
  }

  $scope.getinfo = {
    latest: []
  }

  // Callback Level 1
  HelloBlock.Transactions.get( {
    tx_hash: "latest"
  }, function( res ) {
    console.log( res )

    // Callback Level 2
    var transactionsListener = PusherClient.subscribe( 'transactions' );

    transactionsListener.bind( 'unconfirmed', function( res ) {
      Pusher.beep();

      var tx = JSON.parse( res.message )

      $scope.$apply( function() {
        $scope.transactions.unconfirmed.unshift( tx )
      } )
    } );

  }, function( err ) {
    console.log( err )
  } )

  HelloBlock.Blocks.get( {
    identifier: "latest"
  }, function( res ) {
    console.log( res )

    // Callback Level 2
    var blockListener = PusherClient.subscribe( 'blocks' );

    blockListener.bind( 'latest', function( res ) {
      Pusher.beep();

      var block = JSON.parse( res.message )

      $scope.$apply( function() {
        $scope.blocks.latest.transactions.unshift( block )
      } )
    } );

  }, function( err ) {
    console.log( err )
  } )

} )
