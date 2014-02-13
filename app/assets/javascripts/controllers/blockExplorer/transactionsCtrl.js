hbApp.controller( "blockExplorer/transactionsCtrl", function( $scope, $routeParams, $location, $rootScope, HelloBlock ) {

  var explorerMode = $rootScope.global.mode;

  var defaultTxHashes = {
    testnet: "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3",
    mainnet: "dc55d9c6ec03ceccf0db43d29e7d626a8b107f41066e3917f30398bb01dda2b5"
  }

  $scope.transaction = {
    tx_hash: $routeParams.tx_hash || defaultTxHashes[ explorerMode ],
    n: parseInt( $routeParams.n )
  }

  HelloBlock[ explorerMode ].Transactions.get( {
    tx_hash: $scope.transaction.tx_hash
  }, function( res ) {

    $scope.transaction = $.extend( {}, $scope.transaction, res.data.transaction );

  }, function( err ) {
    console.log( "error", err )
    $location.path( "/" + explorerMode ).search( {
      error: 'true'
    } )
  } )

} )
