hbApp.controller( "explorerCtrl", function( $scope, $resource ) {

	// API RESOURCE

	var HelloBlock = $resource( "https://api.helloblock.io/v1/" )

	// CORE USER PARAMETERS

	$scope.response = {
		loading: false,
		data: {}
	}

	$scope.options = {
		mode: "test",
		resource: "",
		type: "",
		params: {

		},
		body: {

		},
	}

	$scope.request = {
		url: "https://" + $scope.options.mode + ".helloblock.io/v1/",
	}

	$scope.submitRequest = function() {
		$scope.response.loading = true;
		HelloBlock.get()

		// Formatter

		$scope.response.loading = false;
	}

	// HELPERS

} )
