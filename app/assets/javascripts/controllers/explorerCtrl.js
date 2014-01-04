hbApp.controller( "explorerCtrl", function( $scope, $http, Definitions, UrlBuilder ) {
	// REQUEST, options

	$scope.options = {
		selected: {
			index: "0",
			mode: "api"
		},
		definitions: Definitions() // API Method Definitions
	}

	// RESPONSE

	$scope.response = {
		loading: false,
		code: "",
		body: {}
	}

	$scope.submitRequest = function() {
		$scope.response = {}
		$scope.response.loading = true

		var def = $scope.options.definitions[ $scope.options.selected.index ]

		$http( {
			method: def.method,
			url: $scope.request.url
		} ).
		success( function( data, status, config ) {
			$scope.response = {
				code: status,
				css: "success",
				body: angular.toJson( data, true ),
				loading: false
			}
		} ).
		error( function( data, status, config ) {
			$scope.response = {
				code: status,
				css: "danger",
				body: angular.toJson( data, true ),
				loading: false
			}
		} )

	}

	// URL
	$scope.request = {
		url: "TODO"
	}

	$scope.$watch( "options", function() {
		$scope.updateUrl();
	}, true )

	$scope.updateUrl = function() {
		var def = $scope.options.definitions[ $scope.options.selected.index ];
		var url = UrlBuilder.build(
			$scope.options.selected.mode,
			def.name,
			def.parameters,
			def.batch )

		$scope.request.url = url
	}

	// HELPERS

	$scope.select2Options = {
		allowClear: false,
		minimumResultsForSearch: -1
	};

} )
