hbApp.controller( "blockExplorer/propagateCtrl", function( $scope, HelloBlock, $rootScope, $timeout ) {

  var explorerMode = $rootScope.global.mode;

  $scope.rawTransaction = {
    rawTxHex: undefined
  }

  $scope.sending = false;

  // $scope.decodeHex = function() {
  //   if ( !$scope.rawTransaction.rawTxHex ) {
  //     Alerts.addDanger( "Hex can't be blank" )
  //     return;
  //   }

  //   $scope.sending = true;
  //   HelloBlock[ explorerMode ].TransactionsDecode.get( {
  //     rawTxHex: $scope.rawTransaction.rawTxHex
  //   }, function( res ) {
  //     Alerts.addSuccess( "Decoding Successful" )

  //     $scope.transaction = res.data.transaction
  //     $scope.sending = false;
  //   }, function( err ) {
  //     Alerts.addDanger( "Something went wrong" );
  //     $scope.sending = false;
  //   } )
  // }

  $scope.propagateHex = function() {
    if ( !$scope.rawTransaction.rawTxHex ) {
      Alerts.addDanger( "Hex can't be blank" )
      return;
    }

    $scope.sending = true;
    HelloBlock[ explorerMode ].Transactions.save( {
      rawTxHex: $scope.rawTransaction.rawTxHex
    }, function( res ) {
      Socket.beep();
      Alerts.addSuccess( "Propagation successful! " )

      // Hack; need to wait for db to write
      $timeout( function() {
        updateTransaction( res.data.txHash );
        $scope.sending = false;
      }, 2000 )

    }, function( err ) {
      console.log( err )
      Alerts.addDanger( err.data.message, false )
      $scope.sending = false;
    } )
  }

  $scope.alertsArray = []

  var Alerts = {
    addDanger: function( message, fade ) {
      if ( fade === undefined ) {
        fade = true
      }

      $scope.alertsArray.unshift( {
        css: "alert-danger alert-danger-light",
        fade: fade,
        message: message
      } )
      console.log( $scope.alertsArray[ 0 ] )
    },
    addSuccess: function( message, fade ) {
      if ( fade === undefined ) {
        fade = true
      }

      $scope.alertsArray.unshift( {
        css: "alert-success",
        fade: fade || true,
        message: message
      } )
    }
  }

  var updateTransaction = function( txHash ) {
    HelloBlock[ explorerMode ].Transactions.get( {
      txHash: txHash
    }, function( res ) {
      $scope.transaction = res.data.transaction
    } )
  }
} )
