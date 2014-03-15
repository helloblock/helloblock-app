'use strict';

var hbApp = angular.module('hbApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'ui.bootstrap',
  'ui.select2',
  'infinite-scroll'
])

hbApp.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

// EXPLORER MODE
hbApp.run(function($rootScope, $location, $routeParams) {
  // debugger
  $rootScope.global = {}
  $rootScope.global.mode = _getExplorerMode($location.host());

  $rootScope.global.baseUrl = {};

  if (ENV === 'production') {
    $rootScope.global.baseUrl.mainnet = "//helloblock.io";
    $rootScope.global.baseUrl.testnet = "//test.helloblock.io";
  } else {
    $rootScope.global.baseUrl.mainnet = "//localhost:3000";
    $rootScope.global.baseUrl.testnet = "//test.localhost:3000";
  };

})

// CURRENT LINK
hbApp.run(function($rootScope, $location) {
  $rootScope.global.isOnLink = function(path) {
    return path === $location.path().split("/")[1];
  };
})

hbApp.run(function($rootScope, $location, $cookieStore, $anchorScroll) {

  // TODO: What if cookies are set wrong, e.g. JSON.parse("MAINNET")
  // Things could break without us knowing
  // Should force clear every now and then

  // LANGUAGE
  $rootScope.global.language = $cookieStore.get('language') || "curl"
  $rootScope.global.setLanguage = function(name) {
    $rootScope.global.language = name;
    $cookieStore.put('language', name);
  }

  // SOUND; 1 is on, 2 is off
  $rootScope.global.sound = $cookieStore.get('sound') || 1
  $rootScope.global.toggleSound = function() {
    var state = $rootScope.global.sound === 1 ? 2 : 1;
    $rootScope.global.sound = state;
    $cookieStore.put('sound', state);
  }

  $rootScope.$on('$routeChangeSuccess', function(next, current) {
    $anchorScroll();
  });

  $rootScope.bigSearch = {
    query: function(query) {
      var explorerMode = $rootScope.global.mode;

      if (QueryValidator.address(query)) {
        $location.path("/" + explorerMode + "/addresses/" + query)
        return;
      }

      if (QueryValidator.transaction(query)) {
        $location.path("/" + explorerMode + "/transactions/" + query)
        return;
      }

      if (QueryValidator.block(query)) {
        $location.path("/" + explorerMode + "/blocks/" + query)
        return;
      }

      $location.path("/" + explorerMode).search({
        error: 'true'
      })
    }
  }

  // ClipBoard
  ZeroClipboard.config({
    moviePath: '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.3.2/ZeroClipboard.swf',
    trustedDomains: ["*"],
    allowScriptAccess: "always",
    forceHandCursor: true
  });

})

hbApp.config(function($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "/templates/landing.html",
    controller: "landingCtrl"
  })

  $routeProvider.when("/test", {
    templateUrl: "/templates/test.html",
    controller: "testCtrl"
  })

  Route.namespace("/docs", "docs", function(url, name) {
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

  $routeProvider.when('/latest', {
    templateUrl: "/templates/blockExplorer/home.html",
    controller: "blockExplorer/homeCtrl"
  })

  $routeProvider.when("/addresses/:address?", {
    templateUrl: "/templates/blockExplorer/addresses.html",
    controller: "blockExplorer/addressesCtrl"
  })

  $routeProvider.when("/transactions/:txHash?", {
    templateUrl: "/templates/blockExplorer/transactions.html",
    controller: "blockExplorer/transactionsCtrl"
  })

  $routeProvider.when("/blocks/:identifier?", {
    templateUrl: "/templates/blockExplorer/blocks.html",
    controller: "blockExplorer/blocksCtrl"
  })

  $routeProvider.when("/propagate", {
    templateUrl: "/templates/blockExplorer/propagate.html",
    controller: "blockExplorer/propagateCtrl"
  })

  $routeProvider.when("/test", {
    templateUrl: "/templates/blockExplorer/test.html",
    controller: "blockExplorer/testCtrl"
  })

  $routeProvider.otherwise({
    templateUrl: "/404.html",
  });

})

var QueryValidator = {
  hexRegex: /^[0-9a-f]+$/i,
  address: function(query) {
    return cryptocoin.Address.validate(query)
  },
  transaction: function(query) {
    if (query[0] === "0") {
      return false
    }

    if (query.length !== 64) {
      return false
    }

    if (query.match(this.hexRegex) === null) {
      return false
    }

    return true
  },
  block: function(query) {
    if (query.match(/^\d+$/) && parseInt(query) > 0) {
      return true
    }

    if (query.match(this.hexRegex) && query.length === 64) {
      return true
    }

    return false
  }
}

var Route = {
  namespace: function(explorerMode, serviceName, callback) {
    callback(explorerMode, serviceName)
  }
}

var _getExplorerMode = function(host) {
  var subDomain = host.split(".")[0];

  if (subDomain == "test") {
    return "testnet";
  };

  return "mainnet";
}

// var _extractHostname = function(url) {
//   var tmp = document.
// }
