hbApp.controller( "explorerCtrl", function( $scope, $resource, $http, $timeout ) {
	// API RESOURCE

	var HelloBlock = $resource( "https://api.helloblock.io/v1/:resource/" )

	// URL BUILDER
	$scope.buildUrl = function() {
		// var url = "https://" + $scope.selected.mode + ".helloblock.io/v1/" +
		// 	$scope.selected.resource.name + "/" + $scope.selected.params[ 0 ].value + "/"

		// return url
	}

	// CORE USER PARAMETERS

	$scope.resources = [ {
		name: "addresses",
		type: "GET",
		definition: "GET /addresses/:address",
		parameters: [ {
			key: "keyz",
			value: "valuez",
		}, {
			key: "nutha",
			value: "duoood",
		} ]
	}, {
		name: "addresses",
		type: "GET",
		definition: "GET /addresses (batch)",
		parameters: [ {
			key: "addresses[]=",
			value: "asdfasdf",
		}, {
			key: "addresses[]=",
			value: "fdsafdsaf",
		} ]
	} ]

	$scope.selected = {
		mode: "api",
		resource: {
			index: "0"
		},
		params: [],
		body: {

		},
	}

	$scope.response = {
		loading: false,
		code: 321,
		body: angular.toJson( {
			todo: true,
			implemented: "no"
		}, true )
	}

	$scope.submitRequest = function() {
		$scope.response.loading = true;

		$scope.response.code = ""
		$scope.response.body = ""

		$timeout( function() {
			$scope.response.code = Math.random();
			$scope.response.body = angular.toJson( {
				todo: false,
				implemented: true,
				message: "yay"
			}, true );

			$scope.response.loading = false;
		}, 1000 )

		// HelloBlock.get( "", function() {
		// 	console.log( 'success' )
		// 	$scope.response.loading = false;
		// }, function() {
		// 	console.log( 'error' )
		// } )
	}

	// HELPERS

	$scope.select2Options = {
		allowClear: false,
		minimumResultsForSearch: -1
	};

} )
