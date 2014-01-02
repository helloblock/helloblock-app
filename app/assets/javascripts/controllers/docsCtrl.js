'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( method, partial ) {
		return '/templates/docs/' + method + '/_' + partial + '.html'
	}

	// Break into 2 and then recombine
	$scope.general = [
		"introduction"
	]

	$scope.methods = [
		"2",
		"3",
		"4",
		"5",
	]

	$scope.sections = $scope.general.concat( $scope.methods )

} )
