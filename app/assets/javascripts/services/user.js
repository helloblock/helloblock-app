hbApp.factory("User", function($q, $http, $location) {

  var User = {};

  User.create = function(email, password) {
    var deferred = $q.defer();

    $http.post("/users", {
      email: email,
      password: password,
    }).success(function(res) {
      deferred.resolve(res);
      $location.path("/account")
    }).error(function(res) {
      deferred.reject(res)
    })

    return deferred.promise
  }

  return User;

})
