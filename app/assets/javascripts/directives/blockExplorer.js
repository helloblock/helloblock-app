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

hbApp.directive( "spent", function() {
	return function( $scope, element, attrs ) {
		$scope.$watch( function() {
			var spent = JSON.parse( attrs.spent ) // parseBool

			if ( spent === "" ) {
				return;
			};

			if ( spent === true ) {
				$( element ).addClass( "label-default" )
				$( element ).text( "SPENT" )
				return;
			}

			if ( spent === false ) {
				$( element ).addClass( "label-success" )
				$( element ).text( "UNSPENT" )
				return;
			}
		} )
	}
} )
