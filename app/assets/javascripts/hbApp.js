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

var PusherClient = new Pusher( '1cca9695fd809ce4bbab' );

hbApp.run( function( $rootScope, $location, $cookieStore ) {

  // TODO: What if cookies are set wrong, e.g. JSON.parse("MAINNET")
  // Things could break without us knowing
  // Should force clear every now and then
  $rootScope.global = {
    isOnLink: function( path ) {
      return path === $location.path().split( "/" )[ 1 ];
    },
    language: $cookieStore.get( 'language' ) || "curl",
    setLanguage: function( name ) {
      $rootScope.global.language = name;
      $cookieStore.put( 'language', name );
    },
    // 1 is on, 2 is off
    sound: $cookieStore.get( 'sound' ) || 1,
    toggleSound: function() {
      var state = $rootScope.global.sound === 1 ? 2 : 1;
      $rootScope.global.sound = state;
      $cookieStore.put( 'sound', state );
    },
    mode: "TESTNET",
    setMode: function( mode ) {
      $rootScope.global.mode = mode;
      // $cookieStore.put( 'mode', mode );
      $location.path( "/" + mode.toLowerCase() )
    }
  }

  $rootScope.bigSearch = {
    query: function( query ) {
      if ( QueryValidator.address( query ) ) {
        $location.path( "/testnet/addresses/" + query )
        return;
      }

      if ( QueryValidator.transaction( query ) ) {
        $location.path( "/testnet/transactions/" + query )
        return;
      }

      if ( QueryValidator.block( query ) ) {
        $location.path( "/testnet/blocks/" + query )
        return;
      }

      $location.path( "/testnet" ).search( {
        error: 'true'
      } )
    }
  }

  // Pusher.log = function( message ) {
  //   if ( window.console && window.console.log ) {
  //     window.console.log( message );
  //   }
  // };

  Pusher.beep = function() {
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

  Route.namespace( "/docs", "docs", function( url, name ) {
    $routeProvider.when( url, {
      redirectTo: name + "/tutorials"
    } )

    $routeProvider.when( url + "/ref", {
      templateUrl: "/templates/" + name + "/ref.html",
      controller: name + "/refCtrl"
    } )

    $routeProvider.when( url + "/explorer", {
      templateUrl: "/templates/" + name + "/explorer.html",
      controller: name + "/explorerCtrl"
    } )

    $routeProvider.when( url + "/tutorials", {
      templateUrl: "/templates/" + name + "/tutorials.html",
      controller: name + "/tutorialsCtrl"
    } )
  } )

  Route.namespace( "/testnet", "blockExplorer", function( url, name ) {

    $routeProvider.when( url, {
      templateUrl: "/templates/" + name + "/home.html",
      controller: name + "/homeCtrl"
    } )

    $routeProvider.when( url + "/addresses/:address?", {
      templateUrl: "/templates/" + name + "/addresses.html",
      controller: name + "/addressesCtrl"
    } )

    $routeProvider.when( url + "/transactions/:tx_hash?", {
      templateUrl: "/templates/" + name + "/transactions.html",
      controller: name + "/transactionsCtrl"
    } )

    $routeProvider.when( url + "/blocks/:identifier?", {
      templateUrl: "/templates/" + name + "/blocks.html",
      controller: name + "/blocksCtrl"
    } )

    $routeProvider.when( url + "/unconfirmed", {
      templateUrl: "/templates/" + name + "/unconfirmed.html",
      controller: name + "/unconfirmedCtrl"
    } )

    $routeProvider.when( url + "/test", {
      templateUrl: "/templates/" + name + "/test.html",
      controller: name + "/testCtrl"
    } )

  } )

  $routeProvider.otherwise( {
    redirectTo: '/'
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
  namespace: function( url, name, callback ) {
    callback( url, name )
  }
}
