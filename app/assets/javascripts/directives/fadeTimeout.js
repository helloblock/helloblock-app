hbApp.directive( 'fadeTimeout', function( $timeout ) {
  return {
    link: function( $scope, element, attrs ) {
      if ( attrs.fadeTimeout === 'true' ) {
        $timeout( function() {
          $( element ).fadeOut( 1000 )
        }, 10000 )
      }
    }
  }
} );
