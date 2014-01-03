'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( resource, sub, partial ) {
		return '/templates/docs/' + resource + '/' + sub + '/_' + partial + '.html'
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

	$scope.resources = [ {
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
		} ]
	}, {
		name: "Unspents",
		subs: [ {
			name: "intro",
			file: "intro"
		}, {
			name: "Retrieve Unspent Outputs",
			file: "multiple"
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

	$scope.sections = $scope.general.concat( $scope.resources )

} )
