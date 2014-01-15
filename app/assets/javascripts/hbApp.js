'use strict';

var PusherClient = new Pusher( '1cca9695fd809ce4bbab' );

Pusher.log = function( message ) {
  if ( window.console && window.console.log ) {
    window.console.log( message );
  }
};

Pusher.beep = function() {
  var file = "/beep.wav";
  ( new Audio( file ) ).play()
}

var hbApp = angular.module( 'hbApp', [
  'ngRoute',
  'ngResource',
  'ui.bootstrap',
  'ui.select2',
  'infinite-scroll'
] )

hbApp.config( function( $locationProvider ) {
  $locationProvider.html5Mode( true );
} )

hbApp.run( function( $rootScope, $location ) {
  $rootScope.global = {
    isOnLink: function( path ) {
      return path === $location.path()
    },
    language: "curl",
    setLanguage: function( name ) {
      $rootScope.global.language = name;
    }
  }

  $rootScope.bigSearch = function( query ) {
    console.log( query )
    console.log( QueryValidator.address( query ) )
    console.log( QueryValidator.transaction( query ) )
    console.log( QueryValidator.block( query ) )
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

    // TODO Error Handling
    // return
  }

} )

hbApp.config( function( $routeProvider ) {

  $routeProvider.when( "/", {
    templateUrl: "/templates/landing.html"
  } )

  $routeProvider.when( "/docs", {
    templateUrl: "/templates/docs.html",
    controller: "docsCtrl"
  } )

  $routeProvider.when( "/explorer", {
    templateUrl: "/templates/explorer.html",
    controller: "explorerCtrl"
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
    if ( query.length !== 64 ) {
      return false
    }

    if ( query.match( this.hexRegex ) === null ) {
      return false
    }

    return true
  },
  block: function( query ) {
    if ( query.match( /^\d+$/ ) && query > 0 ) {
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
