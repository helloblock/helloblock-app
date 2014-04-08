hbApp.controller("landingCtrl", function($scope, $http, $location) {

	var User = {}
	User.email;

	User.signUp = function(email) {
		if (!email) return;

		$http.post("/email", {
			email: email
		})

		$location.path("/account/signup").search({
			email: email
		})
	}

	$scope.User = User;

})
