hbApp.controller("blockExplorer/homeCtrl", function($scope, $routeParams, $rootScope, HelloBlock, HelloBlockSocket) {

  var explorerMode = $rootScope.global.mode;

  // Defaults
  $scope.transactions = {
    latest: []
  }

  $scope.blocks = {
    latest: []
  }

  $scope.alert = {
    type: "danger",
    msg: "Please ensure your query is a valid address, transaction hash or block height/hash"
  }

  $scope.close = function() {
    delete $scope.alert
  }

  $scope.hasError = function() {
    if ($routeParams.error === 'true') {
      return true;
    }
  };

  var listLimit = 20;

  var ws = new WebSocket(HelloBlockSocket.URL[explorerMode]);

  ws.onopen = function() {
    ws.send(JSON.stringify({
      "op": "subscribe",
      "channel": "transactions",
      "filters": ["unconfirmed"]
    }));

    ws.send(JSON.stringify({
      "op": "subscribe",
      "channel": "blocks",
      "filters": ['latest']
    }));
  }

  ws.onmessage = function(event) {
    if ($scope.transactions.latest.length === 0) return;
    if ($scope.blocks.latest.length === 0) return;

    var data = JSON.parse(event.data)

    if (data.op !== "broadcast") return;

    if (data.channel === "transactions") {
      var resource = data.data.transaction

      $scope.$apply(function() {
        $scope.transactions.latest.unshift(resource)

        if ($scope.transactions.latest.length >= listLimit) {
          $scope.transactions.latest.pop();
        }
      })
    }

    if (data.channel === "blocks") {
      var resource = data.data.block
      $scope.$apply(function() {
        $scope.blocks.latest.unshift(data)

        if ($scope.blocks.latest.length >= listLimit) {
          $scope.blocks.latest.pop();
        }
      })
    }

  }

  HelloBlock[explorerMode].Blocks.get({
    identifier: "latest",
    limit: 20
  }, function(res) {
    $scope.blocks.latest = res.data.blocks
  }, function(err) {
    console.log(err)
  })

  // Callback Level 1
  HelloBlock[explorerMode].Transactions.get({
    txHash: "latest",
    limit: 20,
    inputsOutputs: false
  }, function(res) {
    $scope.transactions.latest = res.data.transactions
  }, function(err) {
    console.log(err)
  })

  $scope.$on("$destroy", function() {
    // transactionsChannel.socket.disconnect();
    // blocksChannel.socket.disconnect();
  })

})
