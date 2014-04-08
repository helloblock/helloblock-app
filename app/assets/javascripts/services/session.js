hbApp.factory("Session", function($q, $http, $location) {
  var Session = {};

  Session.validate = function() {
    var deferred = $q.defer();

    $http.post("/sessions/validate")
      .success(function(res) {
        deferred.resolve(res);
      }).error(function(res) {
        deferred.reject(res)
        $location.path("/account/signin")
      })

    return deferred.promise
  };

  return Session;

})
