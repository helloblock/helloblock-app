hbApp.controller( "blockExplorer/homeCtrl", function( $scope, $routeParams, $rootScope, HelloBlock ) {

  var explorerMode = $rootScope.global.mode;

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

  $scope.hasError = function() {
    if ( $routeParams.error === 'true' ) {
      return true;
    }
  };

  var listLimit = 20;

  var blockChannel = PusherClients[ explorerMode ].subscribe( 'blocks' );
  var transactionsChannel = PusherClients[ explorerMode ].subscribe( 'transactions' );

  HelloBlock[ explorerMode ].Blocks.get( {
    identifier: "latest",
    limit: 20
  }, function( res ) {
    $scope.blocks.latest = res.data.blocks

    // Callback Level 2
    blockChannel.bind( 'latest', function( res ) {
      var block = res.message

      $scope.$apply( function() {
        $scope.blocks.latest.unshift( block )

        if ( $scope.blocks.latest.length >= listLimit ) {
          $scope.blocks.latest.pop();
        }
      } )
    } );

  }, function( err ) {
    console.log( err )
  } )

  // Callback Level 1
  HelloBlock[ explorerMode ].Transactions.get( {
    tx_hash: "latest",
    limit: 20
  }, function( res ) {
    $scope.transactions.latest = res.data.transactions

    // Callback Level 2
    transactionsChannel.bind( 'unconfirmed', function( res ) {
      var tx = res.message

      $scope.$apply( function() {
        $scope.transactions.latest.unshift( tx )

        if ( $scope.transactions.latest.length >= listLimit ) {
          $scope.transactions.latest.pop();
        }
      } )
    } );

  }, function( err ) {
    console.log( err )
  } )

  $scope.$on( "$destroy", function() {
    PusherClients[ explorerMode ].unsubscribe( "blocks" )
    PusherClients[ explorerMode ].unsubscribe( "transactions" )
  } )

} )
