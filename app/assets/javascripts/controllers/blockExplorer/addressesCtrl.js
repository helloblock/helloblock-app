hbApp.controller("blockExplorer/addressesCtrl", function($scope, $routeParams, $location, $rootScope, HelloBlock, HelloBlockSocket, Utils) {

  var explorerMode = $rootScope.global.mode;

  var defaultAddresses = {
    testnet: "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo",
    mainnet: "16ps38WzmDhEWMPQecVndrWZADekC4FU42"
  }

  $scope.address = {
    base58: $routeParams.address || defaultAddresses[explorerMode],
    transactions: [],
    unspents: []
  };

  var suffix = Utils.pathLast($location.path());

  $scope.tabset = {
    transactions: suffix === "transactions",
    unspents: suffix === "unspents"
  }

  var ws = new WebSocket(HelloBlockSocket.URL[explorerMode]);

  ws.onopen = function() {
    ws.send(JSON.stringify({
      "op": "subscribe",
      "channel": "address",
      "events": ['mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L']
    }));
  }

  // Callback: Lvl 1
  HelloBlock[explorerMode].Addresses.get({
    address: $scope.address.base58
  }, function(res) {

    $scope.address = $.extend({}, $scope.address, res.data.address);

    // Callback: Lvl 2
    ws.onmessage = function(event) {
      var data = JSON.parse(event.data);

      if (!data.txHash) {
        return;
      }

      // TODO: txDir
      $scope.$apply(function() {
        $scope.address.transactions.unshift(data)
      })
    }

  }, function(err) {
    console.log("error!", err)
    $location.path("/latest").search({
      error: 'true'
    })
  })

  // Address Transactions
  HelloBlock[explorerMode].AddressTransactions.get({
    address: $scope.address.base58,
    limit: 10,
    offset: 0,
  }, function(res) {

    $scope.address.transactions = res.data.transactions

  }, function(err) {
    console.log("error!", err)
    $location.path("/latest").search({
      error: 'true'
    })
  })

  // Address Unspents
  HelloBlock[explorerMode].AddressUnspents.get({
    address: $scope.address.base58,
    limit: 10,
    offset: 0,
  }, function(res) {

    var unspents_tx_hashes = res.data.unspents.map(function(i) {
      return i.txHash;
    })

    // Callback: Lvl 2
    HelloBlock[explorerMode].Transactions.get({
      txHashes: unspents_tx_hashes
    }, function(res) {

      $scope.address.unspents = res.data.transactions

    }, function(err) {
      console.log("error!", err)
    })

  }, function(err) {
    console.log("error!", err)
    $location.path("/latest").search({
      error: 'true'
    })
  })

  // Infinite Scrolling

  $scope.finished = {
    transactions: false,
    unspents: false
  }

  $scope.offset = {
    transactions: 10,
    unspents: 10
  }

  $scope.fetching = false

  $scope.loadMoreTransactions = function() {
    if ($scope.finished.transactions) {
      return;
    }

    if ($scope.fetching === true) {
      return;
    }

    $scope.fetching = true;
    console.log("fetching ... ")
    // Callback: Lvl 1
    HelloBlock[explorerMode].AddressTransactions.get({
      address: $scope.address.base58,
      limit: 10,
      offset: $scope.offset.transactions
    }, function(res) {

      if (res.data.transactions.length > 0) {
        $scope.address.transactions = $scope.address.transactions.concat(
          res.data.transactions);
        $scope.offset.transactions += 10;
      } else {
        $scope.finished.transactions = true;
      }

      $scope.fetching = false;

    }, function(err) {
      console.log(err)
      $scope.fetching = false;
    })
  }

  $scope.loadMoreUnspents = function() {
    if ($scope.finished.unspents) {
      return;
    }

    if ($scope.fetching === true) {
      return;
    }

    $scope.fetching = true;
    console.log("fetching ... ")
    // Callback: Lvl 1
    HelloBlock[explorerMode].AddressUnspents.get({
      address: $scope.address.base58,
      limit: 10,
      offset: $scope.offset.unspents
    }, function(res) {

      var unspents_tx_hashes = res.data.unspents.map(function(i) {
        return i.txHash;
      })

      if (unspents_tx_hashes.length === 0) {
        $scope.fetching = false;
        $scope.finished.unspents = true;
        return;
      }

      // Callback: Lvl 2
      HelloBlock[explorerMode].Transactions.get({
        txHashes: unspents_tx_hashes
      }, function(res) {

        if (res.data.transactions.length > 0) {
          $scope.address.unspents = $scope.address.unspents.concat(
            res.data.transactions)
          $scope.offset.unspents += 10
        } else {
          $scope.finished.unspents = true;
        }

        $scope.fetching = false;

      }, function(err) {
        console.log("error!", err)
      })
    }, function(err) {
      console.log(err)
    })
  }

  $scope.$on("$destroy", function() {
    // addressesChannel.socket.disconnect();
  })
})
