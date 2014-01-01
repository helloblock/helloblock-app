hbApp.directive( 'sidebar', function() {

	return {
		restrict: "E",
		scope: {
			methods: "="
		},
		templateUrl: "/templates/components/_sidebar.html",
		transclude: true
	}
} );
