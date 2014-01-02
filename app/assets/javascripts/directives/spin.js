hbApp.directive( "spin", function() {
	return {
		restrict: "E",
		link: function( $scope, element, attrs ) {
			var opts;
			var normal = {
				lines: 17,
				length: 40,
				width: 4,
				radius: 40,
				corners: 1,
				rotate: 0,
				direction: 1,
				color: '#000',
				speed: 1,
				trail: 60,
				shadow: false,
				hwaccel: false,
				className: 'spinner',
				zIndex: 2e9,
				top: '300%',
				left: '200%'
			};

			var small = {
				lines: 13,
				length: 10,
				width: 2,
				radius: 5,
				corners: 1,
				rotate: 0,
				direction: 1,
				color: '#000',
				speed: 1,
				trail: 60,
				shadow: false,
				hwaccel: false,
				className: 'spinner',
				zIndex: 2e9,
				top: '10%',
				left: '0%'
			}

			if ( attrs.size === "small" ) {
				opts = small
			} else {
				opts = normal
			}

			var spinner = new Spinner( opts )
			spinner.spin( element[ 0 ] );
		}
	}
} )
