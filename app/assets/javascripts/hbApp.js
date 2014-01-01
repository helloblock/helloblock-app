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

hbApp.run( function( $rootScope, $location ) {
	$rootScope.global = {
		isOnLink: function( path ) {
			return path === $location.path()
		}
	}
} )

hbApp.config( function( $routeProvider ) {

	$routeProvider.when( "/", {
		templateUrl: "/assets/landing.html"
	} )

	$routeProvider.when( "/docs", {
		templateUrl: "/assets/docs.html",
		controller: "docsCtrl"
	} )

	$routeProvider.when( "/explorer", {
		templateUrl: "/assets/explorer.html"
	} )

	$routeProvider.otherwise( {
		redirectTo: '/'
	} );

} )
