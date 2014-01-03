hbApp.controller( "explorerCtrl", function( $scope, $resource ) {

	// API RESOURCE

	var HelloBlock = $resource( "https://api.helloblock.io/v1/" )

	// CORE USER PARAMETERS

	$scope.response = {
		loading: false,
		data: {}
	}

	$scope.request = {
		mode: "test",
		url: "",
		resource: "",
		type: "",
		params: {

		},
		body: {

		},
	}

	$scope.submitRequest = function() {
		$scope.response.loading = true;
		HelloBlock.get()

		$scope.response.loading = false;
	}

	// HELPERS

} )
