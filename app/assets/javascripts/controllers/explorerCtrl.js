hbApp.controller( "explorerCtrl", function( $scope, $resource, $http ) {
	// API RESOURCE

	var HelloBlock = $resource( "https://api.helloblock.io/v1/:resource/", {
		cors: true
	} )

	// CORE USER PARAMETERS

	$scope.options = {
		mode: "api",
		resource: "addresses",
		type: "",
		params: [ {
			key: "address",
			value: "mfwyrZw47YY7wExpcLm7uPHLer7XoMVntd"
		}, {
			key: "txs",
			value: "false"
		} ],
		body: {

		},
	}

	$scope.request = {
		buildUrl: function() {
			return "https://" + $scope.options.mode + ".helloblock.io/v1/" +
				$scope.options.resource + "/" + $scope.options.params[ 0 ].value + "/"
		}

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
		$scope.response.loading = false;
		$scope.response.code = Math.random();
		$scope.response.body = angular.toJson( {
			todo: false,
			implemented: true,
			message: "yay"
		}, true );

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
