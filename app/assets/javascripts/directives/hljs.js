hbApp.directive("hljs", function() {
	return function($scope, element) {

		// element.html( hljs.highlight( attrs.class, tmp ).value );

		hljs.highlightBlock(element[0])
	}
})

hbApp.directive("ngHljs", function($interpolate) {
	return {
		link: function($scope, element, attrs) {
			$scope.$watch("response", function(newResponse, oldResponse) {

				// TODO: Hack, should use templateUrl somehow
				var string = "BODY: \n\n{{response.body}}"

				var tmp = $interpolate(string)($scope);
				element.html(hljs.highlight(attrs.class, tmp).value);
			}, true)
		}
	}
})
