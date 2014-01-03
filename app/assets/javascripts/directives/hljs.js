hbApp.directive( "hljs", function() {
	return function( $scope, element ) {
		hljs.highlightBlock( element[ 0 ] )
	}
} )

hbApp.directive( "ngHljs", function( $timeout, $interpolate ) {
	return function( $scope, element, attrs ) {

		var tmp = $interpolate( element.text() )( $scope );

		$timeout( function() {
			element.html( hljs.highlight( attrs.class, tmp ).value );
		} );
	}
} )
