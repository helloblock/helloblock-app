hbApp.controller( "explorerCtrl", function( $scope, $http, Definitions, UrlBuilder ) {
	// API RESOURCE

	// URL
	$scope.requestUrl = function() {
		var def = $scope.definitions[ $scope.selected.resource.index ];

		return UrlBuilder.build(
			$scope.selected.mode,
			def.name,
			def.parameters,
			def.batch )
	}

	// API METHOD DEFINITIONS

	$scope.definitions = Definitions()

	// CORE USER PARAMETERS

	$scope.selected = {
		mode: "api",
		resource: {
			index: "0"
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
		$scope.response = {}
		$scope.response.loading = true

		var def = $scope.definitions[ $scope.selected.resource.index ]

		// $scope.$apply( function() {
		$http( {
			method: def.method,
			url: $scope.requestUrl()
		} ).
		success( function( data, status, config ) {
			$scope.response = {
				code: status,
				body: angular.toJson( data, true ),
				loading: false
			}
		} ).
		error( function( data, status, config ) {
			$scope.response = {
				code: status,
				body: angular.toJson( data, true ),
				loading: false
			}
		} )
		// } )

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
