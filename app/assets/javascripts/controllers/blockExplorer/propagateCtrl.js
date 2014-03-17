hbApp.controller("blockExplorer/propagateCtrl", function($scope, HelloBlock, $rootScope, $timeout, HelloBlockSocket) {

  var explorerMode = $rootScope.global.mode;

  $scope.transaction = null;

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
    if (!$scope.rawTransaction.rawTxHex) {
      Alerts.addDanger("Hex can't be blank")
      return;
    }

    $scope.sending = true;
    HelloBlock[explorerMode].Transactions.save({
      rawTxHex: $scope.rawTransaction.rawTxHex
    }, function(res) {
      HelloBlockSocket.beep();
      Alerts.addSuccess("Propagation successful! ")

      HelloBlock[explorerMode].Transactions.get({
        txHash: res.data.transaction.txHash
      }, function(resp) {
        $scope.sending = false;

        $scope.transaction = resp.data.transaction
      })

    }, function(err) {
      console.log(err)
      Alerts.addDanger(err.data.message, false)
      $scope.sending = false;
    })
  }

  $scope.alertsArray = []

  var Alerts = {
    addDanger: function(message, fade) {
      if (fade === undefined) {
        fade = true
      }

      $scope.alertsArray.unshift({
        css: "alert-danger alert-danger-light",
        fade: fade,
        message: message
      })
      console.log($scope.alertsArray[0])
    },
    addSuccess: function(message, fade) {
      if (fade === undefined) {
        fade = true
      }

      $scope.alertsArray.unshift({
        css: "alert-success",
        fade: fade || true,
        message: message
      })
    }
  }

})
