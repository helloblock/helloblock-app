hbApp.directive( 'sidebar', function() {

	return {
		restrict: "E",
		scope: {
			methods: "="
		},
		templateUrl: "/assets/components/_sidebar.html",
		transclude: true
	}
} );
