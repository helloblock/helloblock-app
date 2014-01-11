'use strict';

var hbApp = angular.module( 'hbApp', [
	'ngRoute',
	'ngResource',
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

	$routeProvider.when( "/test", {
		templateUrl: "/templates/test.html"
	} )

	$routeProvider.when( "/testnet/", {
		templateUrl: "/templates/explorer/addresses.html",
		controller: "addressesCtrl"
	} )

	$routeProvider.otherwise( {
		redirectTo: '/'
	} );

} )
