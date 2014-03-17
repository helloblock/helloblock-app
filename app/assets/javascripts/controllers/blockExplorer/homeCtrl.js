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

  var ws = new WebSocket(HelloBlockSocket.URL[explorerMode]);

  ws.onopen = function() {
    ws.send(JSON.stringify({
      "op": "subscribe",
      "channel": "transaction",
      "events": ["unconfirmed"]
    }));

    ws.send(JSON.stringify({
      "op": "subscribe",
      "channel": "block",
      "events": ['mainchain']
    }));
  }

  HelloBlock[explorerMode].Blocks.get({
    identifier: "latest",
    limit: 20
  }, function(res) {
    $scope.blocks.latest = res.data.blocks

    // Callback Level 2
    ws.onmessage = function(event) {
      var data = JSON.parse(event.data)

      // TODO: Better sub handler
      if (!data.previousBlockHash) {
        return;
      };

      $scope.$apply(function() {
        $scope.blocks.latest.unshift(data);

        if ($scope.blocks.latest.length >= listLimit) {
          $scope.blocks.latest.pop();
        };
      });
    }

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
    ws.onmessage = function(event) {
      var data = JSON.parse(event.data)

      // TODO: Better sub handler
      if (!data.txHash) {
        return;
      }

      $scope.$apply(function() {
        $scope.transactions.latest.unshift(data)

        if ($scope.transactions.latest.length >= listLimit) {
          $scope.transactions.latest.pop();
        }
      })
    }

  }, function(err) {
    console.log(err)
  })

  $scope.$on("$destroy", function() {
    // transactionsChannel.socket.disconnect();
    // blocksChannel.socket.disconnect();
  })

})