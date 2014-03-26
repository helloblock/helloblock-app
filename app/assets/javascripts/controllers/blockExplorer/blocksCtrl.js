hbApp.controller("blockExplorer/blocksCtrl", function($scope, $routeParams, $location, $rootScope, HelloBlock) {

  var explorerMode = $rootScope.global.mode;

  var identifier = 168058;

  if ($routeParams.identifier) {
    if ($routeParams.identifier.match(/^\d+$/)) {
      identifier = parseInt($routeParams.identifier);
    } else {
      identifier = $routeParams.identifier
    }
  }

  $scope.block = {
    index: identifier,
    identifier: identifier,
    transactions: []
  }

  HelloBlock[explorerMode].Blocks.get({
    identifier: $scope.block.identifier
  }, function(res) {
    var data = res["data"]["block"]
    $scope.block.index = data.blockHeight;
    $scope.block = $.extend({}, $scope.block, data);
  }, function(err) {
    $location.path("/latest").search({
      error: 'true'
    })
  })

  HelloBlock[explorerMode].BlockTransactions.get({
    identifier: $scope.block.identifier,
    limit: 10,
    offset: 0
  }, function(res) {
    $scope.block.transactions = res.data.transactions
  }, function(err) {
    $location.path("/latest").search({
      error: 'true'
    })
  })

  // Infinite Scrolling
  $scope.finished = {
    transactions: false,
  }

  $scope.offset = {
    transactions: 10,
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
    HelloBlock[explorerMode].BlockTransactions.get({
      identifier: $scope.block.identifier,
      limit: 10,
      offset: $scope.offset.transactions
    }, function(res) {

      if (res.data.transactions.length > 0) {
        $scope.block.transactions = $scope.block.transactions.concat(
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

})
