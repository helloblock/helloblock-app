hbApp.controller( "blockExplorer/addressesCtrl", function( $scope, $routeParams, $location, $rootScope, HelloBlock, HelloBlockSocket ) {

  var explorerMode = $rootScope.global.mode;

  var defaultAddresses = {
    testnet: "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo",
    mainnet: "1KJbvJXiV6AguiuBzif1ZzpX67pBCUuf7T"
  }

  $scope.address = {
    base58: $routeParams.address || defaultAddresses[ explorerMode ],
    transactions: [],
    unspents: []
  }

  var addressesChannel = io.connect( HelloBlockSocket.URL[ explorerMode ] + '/addresses', {
    'force new connection': true
  } )

  // Callback: Lvl 1
  HelloBlock[ explorerMode ].Addresses.get( {
    address: $scope.address.base58,
    limit: 50,
    offset: 0
  }, function( res ) {

    $scope.address = $.extend( {}, $scope.address, res.data.address );

    if ( $scope.address.unspents.length === 0 ) return;

    var unspents_tx_hashes = $scope.address.unspents.map( function( i ) {
      return i.tx_hash;
    } )

    // Callback: Lvl 2
    HelloBlock[ explorerMode ].Transactions.get( {
      tx_hashes: unspents_tx_hashes
    }, function( res ) {

      Socket.beep();

      $scope.address.unspent_transactions = res.data.transactions

    }, function( err ) {
      console.log( "error!", err )
    } )

    // Callback: Lvl 2
    addressesChannel.on( $scope.address.base58, function( data ) {
      HelloBlockSocket.beep();

      var tx = data.message
      // TODO
      // tx.direction
      // tx.result

      $scope.$apply( function() {
        $scope.address.transactions.unshift( tx )
      } )
    } );

  }, function( err ) {
    console.log( "error!", err )
    $location.path( "/" + explorerMode ).search( {
      error: 'true'
    } )
  } )

  // Infinite Scrolling

  $scope.finished = {
    transactions: false,
    unspents: false
  }

  $scope.limitTo = {
    transactions: 5,
    unspents: 5,
    end: false
  }

  $scope.offset = {
    transactions: 50,
    unspents: 50
  }

  $scope.fetching = false

  $scope.loadMoreTransactions = function() {
    if ( $scope.finished.transactions ) {
      return;
    }

    $scope.limitTo.transactions += 5

    if ( $scope.limitTo.transactions >= $scope.offset.transactions ) {
      if ( $scope.fetching === true ) {
        return;
      }

      $scope.fetching = true;

      // Callback: Lvl 1
      HelloBlock[ explorerMode ].AddressTransactions.get( {
        address: $scope.address.base58,
        limit: 50,
        offset: $scope.limitTo.transactions
      }, function( res ) {

        if ( res.data.transactions.length > 0 ) {
          $scope.address.transactions = $scope.address.transactions.concat(
            res.data.transactions );
          $scope.offset.transactions = $scope.limitTo.transactions;
          $scope.offset.transactions += 50;
        } else {
          $scope.finished.transactions = true;
        }

        $scope.fetching = false;

      }, function( err ) {
        console.log( err )
        $scope.fetching = false;
      } )
    }
  }

  $scope.loadMoreUnspents = function() {
    if ( $scope.finished.unspents ) {
      return;
    }

    $scope.limitTo.unspents += 5

    if ( $scope.limitTo.unspents >= $scope.offset.unspents ) {
      if ( $scope.fetching === true ) {
        return;
      }

      $scope.fetching = true;

      // Callback: Lvl 1
      HelloBlock[ explorerMode ].AddressUnspents.get( {
        address: $scope.address.base58,
        limit: 50,
        offset: $scope.limitTo.unspents
      }, function( res ) {

        var unspents_tx_hashes = res.data.unspents.map( function( i ) {
          return i.tx_hash;
        } )

        if ( unspents_tx_hashes.length === 0 ) {
          $scope.fetching = false;
          $scope.finished.unspents = true;
          return;
        }

        // Callback: Lvl 2
        HelloBlock[ explorerMode ].Transactions.get( {
          tx_hashes: unspents_tx_hashes
        }, function( res ) {

          if ( res.data.transactions.length > 0 ) {
            $scope.address.unspent_transactions = $scope.address.unspent_transactions.concat(
              res.data.transactions )
            $scope.offset.unspents = $scope.limitTo.unspents
            $scope.offset.unspents += 50
          } else {
            $scope.finished.unspents = true;
          }

          $scope.fetching = false;

        }, function( err ) {
          console.log( "error!", err )
        } )
      }, function( err ) {
        console.log( err )
      } )
    }
  }

  $scope.$on( "$destroy", function() {
    addressesChannel.socket.disconnect();
  } )

} )
