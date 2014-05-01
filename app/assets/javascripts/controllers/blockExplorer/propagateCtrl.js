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

      getTx(res.data.transaction.txHash)

    }, function(err) {
      console.log(err)
      Alerts.addDanger(err.data.message, false)
      $scope.sending = false;
    })
  }

  // Recursive Get Transaction After Propagation
  function getTx(txHash) {
    HelloBlock[explorerMode].Transactions.get({
      txHash: txHash
    }, function(resp) {
      $scope.sending = false;

      $scope.transaction = resp.data.transaction
    }, function(err) {
      setTimeout(function() {
        getTx(txHash)
      }, 5000)
    })
  }

  $scope.alertsArray = []

  $scope.close = function() {
    $scope.alertsArray = []
  }

  var Alerts = {
    addDanger: function(message, fade) {
      $scope.alertsArray.unshift({
        css: "alert-danger alert-danger-light",
        fade: fade || true,
        message: message
      })
    },
    addSuccess: function(message, fade) {
      $scope.alertsArray.unshift({
        css: "alert-success",
        fade: fade || true,
        message: message
      })
    }
  }

})
