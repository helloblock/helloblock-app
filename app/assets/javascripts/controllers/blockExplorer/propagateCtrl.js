hbApp.controller( "blockExplorer/propagateCtrl", function( $scope, HelloBlock, $timeout ) {

  $scope.rawTransaction = {
    hex: undefined
  }

  $scope.sending = false;

  $scope.decodeHex = function() {
    if ( !$scope.rawTransaction.hex ) {
      Alerts.addDanger( "Hex can't be blank" )
      return;
    }

    HelloBlock.TransactionsDecode.get( {
      hex: $scope.rawTransaction.hex
    }, function( res ) {
      Alerts.addSuccess( "Decoding Successful" )

      $scope.transaction = res.data.transaction

    }, function( err ) {
      Alerts.addDanger( "Something went wrong" )
    } )
  }

  $scope.propagateHex = function() {
    if ( !$scope.rawTransaction.hex ) {
      Alerts.addDanger( "Hex can't be blank" )
      return;
    }

    $scope.sending = true;
    HelloBlock.Transactions.save( {
      hex: $scope.rawTransaction.hex
    }, function( res ) {
      console.log( res )
      Pusher.beep();
      Alerts.addSuccess( "Propagation successful! " )

      // Hack; need to wait for db to write
      $timeout( function() {
        updateTransaction( res.data.tx_hash );
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
    HelloBlock.Transactions.get( {
      tx_hash: txHash
    }, function( res ) {
      $scope.transaction = res.data.transaction
    } )
  }
} )
