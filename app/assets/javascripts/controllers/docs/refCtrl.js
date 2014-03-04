hbApp.controller("docs/refCtrl", function($scope) {

  $scope.refUrl = function(resource, subfolder, partial) {
    return '/templates/docs/ref/' + resource + '/' + subfolder + '/_' + partial + '.html'
  }

  $scope.sections = [{
    resource: "introduction",
    subs: [{
      name: "",
      folder: "intro",
      id: "introduction-intro"
    }, {
      name: "Response",
      folder: "response",
      id: "response"
    }, {
      name: "Errors",
      folder: "errors",
      id: "errors"
    }]
  }, {
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
      name: "Retrieve unspents",
      folder: "unspents",
      id: "addresses-unspents"
    }, {
      name: "Retrieve transactions",
      folder: "transactions",
      id: "addresses-transactions"
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
      name: "Retrieve Batch",
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

})
