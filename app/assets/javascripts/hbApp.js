'use strict';

var hbApp = angular.module( 'hbApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'ui.bootstrap',
  'ui.select2',
  'infinite-scroll'
] )

hbApp.config( function( $locationProvider ) {
  $locationProvider.html5Mode( true );
} )

hbApp.run( function( $rootScope, $location ) {
  $rootScope.global = {}

  // EXPLORER MODE
  $rootScope.global.mode = $location.path().split( "/" )[ 1 ] || "testnet";

  $rootScope.global.setMode = function( mode ) {
    $rootScope.global.mode = mode.toLowerCase();
    // $cookieStore.put( 'mode', mode );
    $location.path( "/" + mode.toLowerCase() )
  };
} )

var Socket = {
  URL: {
    mainnet: "https://mainnet-helloblock-socket.herokuapp.com:443",
    testnet: "https://testnet-helloblock-socket.herokuapp.com:443"
  },
  beep: null
}

hbApp.run( function( $rootScope, $location, $cookieStore, $anchorScroll ) {

  // TODO: What if cookies are set wrong, e.g. JSON.parse("MAINNET")
  // Things could break without us knowing
  // Should force clear every now and then

  // CURRENT LINK
  $rootScope.global.isOnLink = function( path ) {
    return path === $location.path().split( "/" )[ 1 ];
  }

  // LANGUAGE
  $rootScope.global.language = $cookieStore.get( 'language' ) || "curl"
  $rootScope.global.setLanguage = function( name ) {
    $rootScope.global.language = name;
    $cookieStore.put( 'language', name );
  }

  // SOUND; 1 is on, 2 is off
  $rootScope.global.sound = $cookieStore.get( 'sound' ) || 1
  $rootScope.global.toggleSound = function() {
    var state = $rootScope.global.sound === 1 ? 2 : 1;
    $rootScope.global.sound = state;
    $cookieStore.put( 'sound', state );
  }

  $rootScope.$on( '$routeChangeSuccess', function( next, current ) {
    $anchorScroll();
  } );

  $rootScope.bigSearch = {
    query: function( query ) {
      var explorerMode = $rootScope.global.mode;

      if ( QueryValidator.address( query ) ) {
        $location.path( "/" + explorerMode + "/addresses/" + query )
        return;
      }

      if ( QueryValidator.transaction( query ) ) {
        $location.path( "/" + explorerMode + "/transactions/" + query )
        return;
      }

      if ( QueryValidator.block( query ) ) {
        $location.path( "/" + explorerMode + "/blocks/" + query )
        return;
      }

      $location.path( "/" + explorerMode ).search( {
        error: 'true'
      } )
    }
  }

  Socket.beep = function() {
    if ( $rootScope.global.sound === 1 ) {
      var file = "/beep.wav";
      ( new Audio( file ) ).play()
    }
  }

} )

hbApp.config( function( $routeProvider ) {

  $routeProvider.when( "/", {
    templateUrl: "/templates/landing.html"
  } )

  $routeProvider.when( "/test", {
    templateUrl: "/templates/test.html",
    controller: "testCtrl"
  } )

  Route.namespace( "/docs", "docs", function( url, name ) {
    $routeProvider.when( url, {
      redirectTo: name + "/tutorials/"
    } )

    $routeProvider.when( url + "/ref", {
      templateUrl: "/templates/" + name + "/ref.html",
      controller: name + "/refCtrl"
    } )

    $routeProvider.when( url + "/explorer", {
      templateUrl: "/templates/" + name + "/explorer.html",
      controller: name + "/explorerCtrl"
    } )

    $routeProvider.when( url + "/tutorials/:tutorial_file?", {
      templateUrl: "/templates/" + name + "/tutorials.html",
      controller: name + "/tutorialsCtrl"
    } )

  } )

  var modes = [ "/testnet", "/mainnet" ];

  for ( var i in modes ) {
    Route.namespace( modes[ i ], "blockExplorer", function( explorerMode, serviceName ) {

      $routeProvider.when( explorerMode, {
        templateUrl: "/templates/" + serviceName + "/home.html",
        controller: serviceName + "/homeCtrl"
      } )

      $routeProvider.when( explorerMode + "/addresses/:address?", {
        templateUrl: "/templates/" + serviceName + "/addresses.html",
        controller: serviceName + "/addressesCtrl"
      } )

      $routeProvider.when( explorerMode + "/transactions/:tx_hash?", {
        templateUrl: "/templates/" + serviceName + "/transactions.html",
        controller: serviceName + "/transactionsCtrl"
      } )

      $routeProvider.when( explorerMode + "/blocks/:identifier?", {
        templateUrl: "/templates/" + serviceName + "/blocks.html",
        controller: serviceName + "/blocksCtrl"
      } )

      $routeProvider.when( explorerMode + "/propagate", {
        templateUrl: "/templates/" + serviceName + "/propagate.html",
        controller: serviceName + "/propagateCtrl"
      } )

      $routeProvider.when( explorerMode + "/test", {
        templateUrl: "/templates/" + serviceName + "/test.html",
        controller: serviceName + "/testCtrl"
      } )

    } )
  };

  $routeProvider.otherwise( {
    templateUrl: "/404.html",
  } );

} )

var QueryValidator = {
  hexRegex: /^[0-9a-f]+$/i,
  address: function( query ) {
    return cryptocoin.Address.validate( query )
  },
  transaction: function( query ) {
    if ( query[ 0 ] === "0" ) {
      return false
    }

    if ( query.length !== 64 ) {
      return false
    }

    if ( query.match( this.hexRegex ) === null ) {
      return false
    }

    return true
  },
  block: function( query ) {
    if ( query.match( /^\d+$/ ) && parseInt( query ) > 0 ) {
      return true
    }

    if ( query.match( this.hexRegex ) && query.length === 64 ) {
      return true
    }

    return false
  }
}

var Route = {
  namespace: function( explorerMode, serviceName, callback ) {
    callback( explorerMode, serviceName )
  }
}
