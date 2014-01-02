'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( method, partial ) {
		return '/templates/docs/' + method + '/_' + partial + '.html'
	}

	$scope.methods = [
		"introduction"
	]

} )
