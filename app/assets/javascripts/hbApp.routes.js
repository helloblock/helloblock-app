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
  Utils.namespace("/account", "account", function(url, name) {
    $routeProvider.when(url + "/signin", {
      templateUrl: "/templates/account/auth.html",
      controller: name + "/authCtrl"
    })

    $routeProvider.when(url + "/signup", {
      templateUrl: "/templates/account/auth.html",
      controller: name + "/authCtrl"
    })

    $routeProvider.when(url + "/settings", {
      templateUrl: "/templates/account/settings.html",
      controller: name + "/settingsCtrl"
    })

    $routeProvider.when(url, {
      templateUrl: "/templates/" + name + "/index.html",
      controller: name + "/indexCtrl",
      resolve: {
        verify: function(Session) {
          return true;
          // return Session.validate()
        }
      }
    })

    $routeProvider.when(url + "/keys", {
      templateUrl: "/templates/account/index.html",
      controller: name + "/indexCtrl"
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
