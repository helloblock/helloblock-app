hbApp.controller("blockExplorer/homeCtrl", function($scope, $routeParams, $rootScope, HelloBlock, HelloBlockSocket) {

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
    if ($routeParams.error === 'true') {
      return true;
    }
  };

  var listLimit = 20;

  // var blocksChannel = io.connect(HelloBlockSocket.URL[explorerMode] + '/blocks', {
  //   'force new connection': true
  // })
  // var transactionsChannel = io.connect(HelloBlockSocket.URL[explorerMode] + '/transactions', {
  //   'force new connection': true
  // })

  HelloBlock[explorerMode].Blocks.get({
    identifier: "latest",
    limit: 20
  }, function(res) {
    $scope.blocks.latest = res.data.blocks

    // Callback Level 2
    // blocksChannel.on("latest", function(data) {
    //   var block = data.message

    //   $scope.$apply(function() {
    //     $scope.blocks.latest.unshift(block)

    //     if ($scope.blocks.latest.length >= listLimit) {
    //       $scope.blocks.latest.pop();
    //     }
    //   })
    // })

  }, function(err) {
    console.log(err)
  })

  // Callback Level 1
  HelloBlock[explorerMode].Transactions.get({
    txHash: "latest",
    limit: 20
  }, function(res) {
    $scope.transactions.latest = res.data.transactions

    // Callback Level 2
    // transactionsChannel.on("latest", function(data) {

    //   var tx = data.message

    //   $scope.$apply(function() {
    //     $scope.transactions.latest.unshift(tx)

    //     if ($scope.transactions.latest.length >= listLimit) {
    //       $scope.transactions.latest.pop();
    //     }
    //   })
    // })

  }, function(err) {
    console.log(err)
  })

  $scope.$on("$destroy", function() {
    // transactionsChannel.socket.disconnect();
    // blocksChannel.socket.disconnect();
  })

})
