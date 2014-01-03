hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.docsUrl = function( resource, sub, partial ) {
		return '/templates/docs/' + resource + '/' + sub + '/_' + partial + '.html'
	}

	// Break into 2 and then recombine
	$scope.general = [ {
		name: "introduction",
		subs: [ {
			name: "",
			file: "intro",
			id: "introduction-intro"
		} ]
	}, {
		name: "walkthrough",
		subs: [ {
			name: "",
			file: "intro",
			id: "walkthrough-intro"
		} ]
	}, {
		name: "errors",
		subs: [ {
			name: "",
			file: "intro",
			id: "errors-intro"
		} ]
	} ]

	$scope.resources = [ {
		name: "addresses",
		subs: [ {
			name: "",
			file: "intro",
			id: "addresses-intro"
		}, {
			name: "Retrieve an Address",
			file: "single",
			id: "addresses-single"
		}, {
			name: "Retrieve multiple Addresses",
			file: "batch",
			id: "addresses-batch"
		} ]
	}, {
		name: "unspents",
		subs: [ {
			name: "",
			file: "intro",
			id: "unspents-intro"
		}, {
			name: "Retrieve Unspent Outputs",
			file: "multiple",
			id: "unspents-multiple"
		} ]
	}, {
		name: "transactions",
		subs: [ {
			name: "",
			file: "intro",
			id: "transactions-intro"
		}, {
			name: "Retrieve a Transaction",
			file: "single",
			id: "transactions-single"
		}, {
			name: "Retrieve multiple Transactions",
			file: "batch",
			id: "transactions-batch"
		}, {
			name: "Propagate a Transaction",
			file: "post",
			id: "transactions-post"
		} ]
	}, {
		name: "blocks",
		subs: [ {
			name: "intro",
			file: "intro",
			id: "blocks-intro"
		}, {
			name: "Retrieve a Block",
			file: "single",
			id: "blocks-single"
		} ]
	}, ]

	$scope.sections = $scope.general.concat( $scope.resources )

} )
