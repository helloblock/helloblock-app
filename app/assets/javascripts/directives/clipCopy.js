hbApp.directive('clipboard', function() {
	return {
		restrict: 'E',
		template: '<i class="fa fa-copy"><span class="tiny"> Copy</span></i>',
		link: function(scope, element, attrs) {
			// Create the clip object
			var clip = new ZeroClipboard(element);

			clip.on('load', function(client) {

				var onMousedown = function(client) {
					client.setText(attrs.clipCopy);
				};

				client.on('mousedown', onMousedown);

				scope.$on('$destroy', function() {
					client.off('mousedown', onMousedown);
					client.unclip(element);
				});
			});
		}
	};
});
