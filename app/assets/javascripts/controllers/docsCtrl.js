'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( method, partial ) {
		return '/templates/docs/' + method + '/_' + partial + '.html'
	}

	// Break into 2 and then recombine
	$scope.general = [ {
		name: "introduction",
		subs: []
	}, {
		name: "walkthrough",
		subs: []
	}, {
		name: "errors",
		subs: []
	}, ]

	$scope.methods = [ {
		name: "addresses",
		subs: [ "/a", "/b", "/c" ]
	}, {
		name: "transactions",
		subs: [ "/a", "/b", "/c" ]
	}, {
		name: "blocks",
		subs: [ "/a", "/b", "/c" ]
	}, ]

	$scope.sections = $scope.general.concat( $scope.methods )

} )
