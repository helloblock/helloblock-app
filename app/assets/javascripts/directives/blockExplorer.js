var SATOSHI = 100000000

hbApp.directive( "toBtc", function() {
	return function( $scope, element, attrs ) {
		// $scope.$watch( function() {
		var satoshiStr = attrs.toBtc
		if ( satoshiStr === "" ) {
			return
		};

		var satoshis = parseInt( satoshiStr )
		var btc = ( satoshis / SATOSHI ).toFixed( 8 )
		var btc = btc.replace( /\.?0+$/, "" )

		$( element ).text( btc + " BTC" )
		// } )
	}
} )

hbApp.directive( "spent", function() {
	return function( $scope, element, attrs ) {
		// $scope.$watch( function() {
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
		// } )
	}
} )

hbApp.directive( "confirmations", function() {
	return function( $scope, element, attrs ) {
		// $scope.$watch( function() {
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

		if ( confirmations > 6 ) {
			if ( attrs.verbose === 'true' ) {
				$( element ).addClass( "label-default" )
				$( element ).text( confirmations + " CONFIRMATIONS" )
			} else {
				$( element ).addClass( "label-default" )
				$( element ).text( ">6 CONFIRMATIONS" )
			}

			return;
		};
		// } )
	}
} )

hbApp.directive( "utc", function() {
	return function( $scope, element, attrs ) {
		// $scope.$watch( function() {
		var epoch = attrs.utc

		if ( epoch === "" ) {
			$( element ).text( "n/a" )
			return;
		}

		var time = moment( epoch, "X" ).utc()

		var formatted = time.format( 'MMM D YY, h:mm:ssA UTC' );

		$( element ).text( formatted )
		// } )
	}
} )

moment.fn.fromNowWithSeconds = function( a ) {
	var milliseconds = Math.abs( moment().diff( this ) );

	if ( milliseconds < 60000 ) { // 60 seconds
		var seconds = ( milliseconds / 1000 ).toFixed( 0 )
		return seconds + ' secs ago';
	}

	return this.fromNow( a );
}

hbApp.directive( "timeago", function( $timeout ) {
	return function( $scope, element, attrs ) {
		var epoch = attrs.timeago

		if ( epoch === "" ) {
			$( element ).text( "n/a" )
			return;
		}

		var tick = function() {
			var timeago = moment( epoch, "X" ).fromNowWithSeconds()

			$( element ).text( timeago )

			$timeout( function() {
				tick()
			}, 1000 )
		}

		tick()

	}
} )

hbApp.directive( "highlightIfAddress", function() {
	return function( $scope, element, attrs ) {
		// $scope.$watch( function() {
		var epoch = attrs.timeago

		if ( epoch === "" ) {
			$( element ).text( "n/a" )
			return;
		}

		var timeago = moment( epoch, "X" ).fromNow()

		$( element ).text( timeago )
		// } )

	}
} )

hbApp.directive( "direction", function() {
	return function( $scope, element, attrs ) {
		// $scope.$watch( function() {
		if ( attrs.direction == "" ) {
			return;
		}

		$( element ).removeClass()

		if ( attrs.direction == "incoming" ) {
			$( element ).addClass( "text-success" )
			return;
		}

		if ( attrs.direction == "outgoing" ) {
			$( element ).addClass( "text-danger" )
			return;
		}
		// } )
	}
} )
