hbApp.factory("Session", function($q, $http, $location) {

  var Session = {};

  Session.validate = function() {
    var deferred = $q.defer();

    $http.post("/sessions/validate")
      .success(function(res) {
        deferred.resolve(res);
      }).error(function(res) {
        deferred.reject(res)
        $location.path("/signin")
      })

    return deferred.promise
  }

  Session.create = function(email, password) {
    var deferred = $q.defer();

    $http.post("/sessions", {
      email: email,
      password: password,
    }).success(function(res) {
      deferred.resolve(res);
      $location.path("/dashboard")
    }).error(function(res) {
      deferred.reject(res)
    })

    return deferred.promise
  }

  Session.delete = function() {
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

  Session.debug = function() {
    var deferred = $q.defer();

    $http.get("/sessions/debug")
      .success(function(res) {
        deferred.resolve(res);
      })
      .error(function(res) {
        deferred.reject(res);
      })

    return deferred.promise;
  }

  return Session;

})
