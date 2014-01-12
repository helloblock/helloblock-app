'use strict';

var hbApp = angular.module( 'hbApp', [
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'ui.select2'
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

		$routeProvider.when( url + "/addresses", {
			templateUrl: "/templates/" + name + "/addresses.html",
			controller: name + "/addressesCtrl"
		} )

		$routeProvider.when( url, {
			templateUrl: "/templates/" + name + "/home.html",
			controller: name + "/homeCtrl"
		} )
	} )

	$routeProvider.otherwise( {
		redirectTo: '/'
	} );

} )

var Route = {
	namespace: function( url, name, callback ) {
		callback( url, name )
	}

}
