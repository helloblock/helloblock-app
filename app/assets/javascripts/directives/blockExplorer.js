var SATOSHI = 100000000

hbApp.directive( "toBtc", function() {
	return function( $scope, element, attrs ) {
		$scope.$watch( function() {
			var satoshiStr = attrs.toBtc
			if ( satoshiStr === "" ) {
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

hbApp.directive( "confirmations", function() {
	return function( $scope, element, attrs ) {
		$scope.$watch( function() {
			var confirmations = parseInt( attrs.confirmations )

			// debugger

			if ( confirmations === 0 ) {
				$( element ).addClass( "label-danger" )
				$( element ).text( "UNCONFIRMED" )
				return;
			};

			if ( confirmations >= 1 && confirmations <= 6 ) {
				$( element ).addClass( "label-warning" )
				$( element ).text( confirmations + " CONFIRMATIONS" )
				return;
			};

			// if ( confirmations > 6 ) {
			// 	$( element ).addClass( "label-success" )
			// 	$( element ).text( confirmations + " CONFIRMATIONS" )
			// 	return;
			// };

		} )
	}
} )
