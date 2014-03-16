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
        name: "Get",
        folder: "single",
        id: "addresses-single"
      }, {
        name: "Get batch",
        folder: "batch",
        id: "addresses-batch"
      }, {
        name: "Get unspents",
        folder: "unspents",
        id: "addresses-unspents"
      }, {
        name: "Get batch unspents",
        folder: "batch-unspents",
        id: "addresses-batch-unspents"
      }, {
        name: "Get transactions",
        folder: "transactions",
        id: "addresses-transactions"
      }, {
        name: "Get batch transactions",
        folder: "batch-transactions",
        id: "addresses-batch-transactions"
      }]
    }, {
      resource: "transactions",
      subs: [{
        name: "",
        folder: "intro",
        id: "transactions-intro"
      }, {
        name: "Get",
        folder: "single",
        id: "transactions-single"
      }, {
        name: "Get batch",
        folder: "batch",
        id: "transactions-batch"
      }, {
        name: "Get latest",
        folder: "latest",
        id: "transactions-latest"
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
        name: "Get",
        folder: "single",
        id: "blocks-single"
      }, {
        name: "Get transactions",
        folder: "transactions",
        id: "blocks-transactions"
      }, {
        name: "Get latest",
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
        name: "Get",
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
        name: "Get unspents",
        folder: "single",
        id: "faucet-single"
      }, {
        name: "Withdrawal",
        folder: "withdrawal",
        id: "faucet-withdrawal"
      }]
    }, {
      resource: "socket",
      subs: [{
        name: "",
        folder: "intro",
        id: "socket-intro"
      }]
    }
    // , {
    //   resource: "blockchain.info",
    //   subs: [{
    //     name: "",
    //     folder: "intro",
    //     id: "blockchain.info-intro"
    //   }]
    // }
  ]

})
