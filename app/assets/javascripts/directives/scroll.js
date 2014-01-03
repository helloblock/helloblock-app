hbApp.directive( 'scroll', function() {

	return {
		restrict: "A",
		link: function( $scope, element ) {
			window.onload = function() {
				element.scrollIntoView( true );
			}
		}
	}
} );
