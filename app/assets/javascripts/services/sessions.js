hbApp.factory("Sessions", function($q, $http, $location) {

  var Sessions = {};

  Sessions.create = function(email, password) {
    var deferred = $q.defer();

    $http.post("/sessions", {
      email: "email",
      password: "password",
    }).success(function(res) {
      deferred.resolve(res);
    }).error(function(res) {
      deferred.reject(res)
      $location.path("/signup")
    })

    return deferred.promise
  }

  Sessions.delete = function(email, password) {
    var deferred = $q.defer();

    $http.delete("/sessions")
      .success(function(res) {
        deferred.resolve(res);
      })
      .error(function(res) {
        deferred.reject(res);
      });

    return deferred.promise;
  };

  return Sessions;

})
