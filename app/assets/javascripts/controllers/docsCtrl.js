'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( method, sub, partial ) {
		return '/templates/docs/' + method + '/' + sub + '/_' + partial + '.html'
	}

	// Break into 2 and then recombine
	$scope.general = [ {
		name: "introduction",
		subs: [ {
			name: "",
			file: "intro"
		} ]
	}, {
		name: "walkthrough",
		subs: [ {
			name: "",
			file: "intro"
		} ]
	}, {
		name: "errors",
		subs: [ {
			name: "",
			file: "intro"
		} ]
	}, ]

	$scope.methods = [ {
		name: "addresses",
		subs: [ {
			name: "",
			file: "intro"
		}, {
			name: "Retrieve an Address",
			file: "single"
		}, {
			name: "Retrieve multiple Addresses",
			file: "batch"
		}, {
			name: "Retrieve Unspent Outputs",
			file: "unspents"
		} ]
	}, {
		name: "transactions",
		subs: [ {
			name: "intro",
			file: "intro"
		}, {
			name: "Retrieve a Transaction",
			file: "single"
		}, {
			name: "Retrieve multiple Transactions",
			file: "batch"
		}, {
			name: "Propagate a Transaction",
			file: "post"
		} ]
	}, {
		name: "blocks",
		subs: [ {
			name: "intro",
			file: "intro"
		}, {
			name: "Retrieve a Block",
			file: "single"
		} ]
	}, ]

	$scope.sections = $scope.general.concat( $scope.methods )

} )
