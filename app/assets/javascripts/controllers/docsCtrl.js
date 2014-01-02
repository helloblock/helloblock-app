'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( method, sub, partial ) {
		return '/templates/docs/' + method + '/' + sub + '/_' + partial + '.html'
	}

	// Break into 2 and then recombine
	$scope.general = [ {
		name: "introduction",
		subs: [ {
			name: "intro"
		} ]
	}, {
		name: "walkthrough",
		subs: [ {
			name: "intro"
		} ]
	}, {
		name: "errors",
		subs: [ {
			name: "intro"
		} ]
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
			name: "unspents",
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
		subs: [ {
			name: "intro",
		}, {
			name: "single",
		} ]
	}, ]

	$scope.sections = $scope.general.concat( $scope.methods )

} )
