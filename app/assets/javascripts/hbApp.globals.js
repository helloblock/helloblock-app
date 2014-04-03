// EXPLORER MODE
hbApp.run(function($rootScope, $location, $routeParams) {
  // debugger
  $rootScope.global = {}
  $rootScope.global.mode = Utils.explorerMode($location.host());

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

  $rootScope.global.isOnLinks = function(array) {
    var onLink = false;
    array.forEach(function(item) {
      if (item === $location.path().split("/")[1]) {
        onLink = true;
        return;
      }
    })

    return onLink;
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
        $location.path("/addresses/" + query)
        return;
      }

      if (QueryValidator.transaction(query)) {
        $location.path("/transactions/" + query)
        return;
      }

      if (QueryValidator.block(query)) {
        $location.path("/blocks/" + query)
        return;
      }

      $location.path("/latest").search({
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
