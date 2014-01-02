'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( method, sub, partial ) {
		return '/templates/docs/' + method + '/' + sub + '/_' + partial + '.html'
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
		subs: [ {
			name: "intro",
		}, {
			name: "single",
		}, {
			name: "batch",
		}, {
			name: "unspent",
		} ]
	}, {
		name: "transactions",
		subs: [ {
			name: "intro",
		}, {
			name: "single",
		}, {
			name: "batch",
		}, {
			name: "post",
		} ]
	}, {
		name: "blocks",
		subs: [ "/a", "/b", "/c" ]
	}, ]

	$scope.sections = $scope.general.concat( $scope.methods )

} )
