hbApp.controller("landingCtrl", function($scope, $http, $location, $anchorScroll) {

	var User = {}
	User.email;

	User.emailSuccess = false;
	User.submitting = false
	User.signUp = function(email) {
		if (!email) return;

		User.submitting = true
		$http.post("/email", {
			email: email
		})
			.success(function(data) {
				User.emailSuccess = true;
				User.submitting = false;
				$anchorScroll();
			})
			.error(function(err) {
				User.submitting = false;
			});

		// $location.path("/account/signup").search({
		// 	email: email
		// })
	}

	$scope.User = User;

})
