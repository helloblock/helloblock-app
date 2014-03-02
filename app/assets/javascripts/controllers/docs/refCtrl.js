hbApp.controller("docs/refCtrl", function($scope) {

  $scope.refUrl = function(resource, subfolder, partial) {
    return '/templates/docs/ref/' + resource + '/' + subfolder + '/_' + partial + '.html'
  }

  // Sidebar Structure, link with main content
  // Break into 2 and then recombine
  $scope.general = [{
    resource: "introduction",
    subs: [{
      name: "",
      folder: "intro",
      id: "introduction-intro"
    }]
  }, {
    resource: "errors",
    subs: [{
      name: "",
      folder: "intro",
      id: "errors-intro"
    }]
  }]

  $scope.resources = [{
    resource: "addresses",
    subs: [{
      name: "",
      folder: "intro",
      id: "addresses-intro"
    }, {
      name: "Retrieve",
      folder: "single",
      id: "addresses-single"
    }, {
      name: "Retrieve multiple",
      folder: "batch",
      id: "addresses-batch"
    }, {
      name: "Retrieve transactions",
      folder: "batch",
      id: "addresses-batch"
    }, {
      name: "Retrieve unspents",
      folder: "unspents",
      id: "addresses-unspents"
    }]
  }, {
    resource: "transactions",
    subs: [{
      name: "",
      folder: "intro",
      id: "transactions-intro"
    }, {
      name: "Retrieve",
      folder: "single",
      id: "transactions-single"
    }, {
      name: "Retrieve multiple",
      folder: "batch",
      id: "transactions-batch"
    }, {
      name: "Retrieve latest",
      folder: "latest",
      id: "transactions-latest"
    }, {
      name: "Decode",
      folder: "decode",
      id: "transactions-decode"
    }, {
      name: "Propagate",
      folder: "post",
      id: "transactions-post"
    }]
  }, {
    resource: "blocks",
    subs: [{
      name: "intro",
      folder: "intro",
      id: "blocks-intro"
    }, {
      name: "Retrieve",
      folder: "single",
      id: "blocks-single"
    }, {
      name: "Retrieve transactions",
      folder: "transactions",
      id: "blocks-transactions"
    }, {
      name: "Retrieve latest",
      folder: "latest",
      id: "blocks-latest"
    }]
  }, {
    resource: "wallet",
    subs: [{
      name: "intro",
      folder: "intro",
      id: "wallet-intro"
    }, {
      name: "Retrieve",
      folder: "batch",
      id: "wallet-batch"
    }]
  }, {
    resource: "faucet",
    subs: [{
      name: "intro",
      folder: "intro",
      id: "faucet-intro"
    }, {
      name: "Retrieve",
      folder: "single",
      id: "faucet-single"
    }, {
      name: "Withdrawal",
      folder: "withdrawal",
      id: "faucet-withdrawal"
    }, {
      name: "stats",
      folder: "stats",
      id: "faucet-stats"
    }]
  }, {
    resource: "streaming",
    subs: [{
      name: "",
      folder: "intro",
      id: "streaming-intro"
    }]
  }, {
    resource: "blockchain.info",
    subs: [{
      name: "",
      folder: "intro",
      id: "blockchain.info-intro"
    }]
  }]

  $scope.sections = $scope.general.concat($scope.resources)

})
