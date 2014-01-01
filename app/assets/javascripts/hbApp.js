'use strict';

var hbApp = angular.module( 'hbApp', [
	'ngRoute',
	'ngResource',
	'ui.bootstrap'
] )

hbApp.config( function( $httpProvider ) {
	var authToken;
	authToken = $( "meta[name=\"csrf-token\"]" ).attr( "content" );
	return $httpProvider.defaults.headers.common[ "X-CSRF-TOKEN" ] = authToken;
} );

hbApp.config( function( $locationProvider ) {
	$locationProvider.html5Mode( false );
	$locationProvider.hashPrefix( '!' );
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
		templateUrl: "/templates/explorer.html"
	} )

	$routeProvider.when( "/test", {
		templateUrl: "/templates/test.html"
	} )

	$routeProvider.otherwise( {
		redirectTo: '/'
	} );

} )
