var SATOSHI = 100000000

hbApp.directive( "toBtc", function() {
	return function( $scope, element, attrs ) {
		$scope.$watch( function() {
			var satoshiStr = attrs.toBtc
			if ( satoshiStr == "" ) {
				return
			};

			var satoshis = parseInt( satoshiStr )
			var btc = ( satoshis / SATOSHI ).toFixed( 8 )
			var btc = btc.replace( /\.?0+$/, "" )

			$( element ).text( btc + " BTC" )
		} )
	}
} )
