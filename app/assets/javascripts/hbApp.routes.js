hbApp.config(function($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "/templates/landing.html",
    controller: "landingCtrl"
  })

  // DOCS
  Utils.namespace("/docs", "docs", function(url, name) {
    $routeProvider.when(url, {
      redirectTo: name + "/tutorials/"
    })

    $routeProvider.when(url + "/ref", {
      templateUrl: "/templates/" + name + "/ref.html",
      controller: name + "/refCtrl"
    })

    $routeProvider.when(url + "/explorer", {
      templateUrl: "/templates/" + name + "/explorer.html",
      controller: name + "/explorerCtrl"
    })

    $routeProvider.when(url + "/tutorials/:tutorial_file?", {
      templateUrl: "/templates/" + name + "/tutorials.html",
      controller: name + "/tutorialsCtrl"
    })

  })

  // DASHBOARD
  Utils.namespace("/dashboard", "dashboard", function(url, name) {
    $routeProvider.when(url, {
      templateUrl: "/templates/" + name + "/index.html",
      controller: name + "/indexCtrl",
      resolve: {
        authenticate: function(Auth, $location) {
          var authPromise = Auth.verify()

          authPromise.then(function(session) {
            // cookie store
            // save session

            return true
          }, function(reason) {
            return $location.path("/", {
              error: "unauthorized"
            })
          }, function(update) {
            console.log(update)
          });
        }
      }
    })
  })

  // BLOCK EXPLORER
  $routeProvider.when('/latest', {
    templateUrl: "/templates/blockExplorer/home.html",
    controller: "blockExplorer/homeCtrl"
  })

  var versions = ["", "/v1"];
  versions.forEach(function(prefix) {
    $routeProvider.when(prefix + "/addresses/:address?", {
      templateUrl: "/templates/blockExplorer/addresses.html",
      controller: "blockExplorer/addressesCtrl"
    })

    $routeProvider.when(prefix + "/addresses/:address/transactions", {
      templateUrl: "/templates/blockExplorer/addresses.html",
      controller: "blockExplorer/addressesCtrl"
    })

    $routeProvider.when(prefix + "/addresses/:address/unspents", {
      templateUrl: "/templates/blockExplorer/addresses.html",
      controller: "blockExplorer/addressesCtrl"
    })

    $routeProvider.when(prefix + "/transactions/:txHash?", {
      templateUrl: "/templates/blockExplorer/transactions.html",
      controller: "blockExplorer/transactionsCtrl"
    })

    $routeProvider.when(prefix + "/blocks/:identifier?", {
      templateUrl: "/templates/blockExplorer/blocks.html",
      controller: "blockExplorer/blocksCtrl"
    })

    $routeProvider.when(prefix + "/blocks/:identifier/transactions", {
      templateUrl: "/templates/blockExplorer/blocks.html",
      controller: "blockExplorer/blocksCtrl"
    })
  })

  $routeProvider.when("/propagate", {
    templateUrl: "/templates/blockExplorer/propagate.html",
    controller: "blockExplorer/propagateCtrl"
  })

  $routeProvider.otherwise({
    templateUrl: "/404.html",
  });

})
