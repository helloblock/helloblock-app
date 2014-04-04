hbApp.directive("equals", function() {
	return {
		restrict: 'A', // only activate on element attribute
		require: '?ngModel', // get a hold of NgModelController
		link: function(scope, elem, attrs, ngModel) {
			if (!ngModel) return; // do nothing if no ng-model

			// watch own value and re-validate on change
			scope.$watch(attrs.ngModel, function() {
				validate();
			});

			// observe the other value and re-validate on change
			attrs.$observe('equals', function(val) {
				validate();
			});

			function validate() {
				// values
				var val1 = ngModel.$viewValue;
				var val2 = attrs.equals;

				// if value missing
				if (!val1 || !val2) {
					ngModel.$setValidity('equals', true);
					return;
				}

				// set validity
				ngModel.$setValidity('equals', val1 === val2);
			};
		}
	}
})
