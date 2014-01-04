hbApp.controller( "explorerCtrl", function( $scope, $resource ) {

	// API RESOURCE

	var HelloBlock = $resource( "https://api.helloblock.io/v1/" )

	// CORE USER PARAMETERS

	$scope.options = {
		mode: "api",
		resource: "addresses",
		type: "",
		params: [ {
			key: "address",
			value: "123"
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
		body: angular.toJson( {
			todo: true,
			implemented: false
		}, true )
	}

	$scope.submitRequest = function() {
		$scope.response.loading = true;
		HelloBlock.get()

		// Formatter

		$scope.response.loading = false;
	}

	// HELPERS

	$scope.select2Options = {
		allowClear: false,
		minimumResultsForSearch: -1
	};

} )
