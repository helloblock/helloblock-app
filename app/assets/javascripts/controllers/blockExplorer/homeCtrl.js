hbApp.controller( "blockExplorer/homeCtrl", function( $scope, HelloBlock ) {

  // Defaults
  $scope.transactions = {
    latest: []
  }

  $scope.blocks = {
    latest: []
  }

  $scope.getinfo = {
    latest: []
  }

  HelloBlock.Blocks.get( {
    identifier: "latest"
  }, function( res ) {
    $scope.blocks.latest = res.data.blocks

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

  // Callback Level 1
  HelloBlock.Transactions.get( {
    tx_hash: "latest"
  }, function( res ) {
    $scope.transactions.latest = res.data.transactions

    // Callback Level 2
    var transactionsListener = PusherClient.subscribe( 'transactions' );

    transactionsListener.bind( 'unconfirmed', function( res ) {
      Pusher.beep();

      var tx = JSON.parse( res.message )

      $scope.$apply( function() {
        $scope.transactions.latest.unshift( tx )
      } )
    } );

  }, function( err ) {
    console.log( err )
  } )

} )
