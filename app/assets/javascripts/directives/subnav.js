hbApp.directive( 'subnav', function() {

	return {
		restrict: "E",
		scope: {
			selected: "="
		},
		templateUrl: "/templates/components/_subnav.html",
		transclude: true
	}
} );
