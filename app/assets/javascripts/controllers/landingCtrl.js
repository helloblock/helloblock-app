hbApp.controller("landingCtrl", function($scope, $http, $location, $routeParams) {
	$scope.emailSuccess = function() {
		if ($routeParams.email_success === 'true') {
			return true;
		}
	};

	$scope.User = {
		email: "",
		signUp: function(email) {
			if (!email) {
				return;
			};

			$http.post("/email", {
				email: email
			}).success(function() {
				$location.path("/").search({
					email_success: 'true'
				})
			})
		}
	}
})
