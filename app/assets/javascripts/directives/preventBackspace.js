hbApp.directive( "preventBackspace", function( $location ) {
	return function( $scope, element, attrs ) {

		element.on( "keydown", function( event ) {

			if ( event.keyCode == 8 ) {
				event.preventDefault();
			}
		} )
	}
} )
