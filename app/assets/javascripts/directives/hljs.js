hbApp.directive( "hljs", function() {
	return function( $scope, element ) {
		hljs.highlightBlock( element[ 0 ] )
	}
} )
