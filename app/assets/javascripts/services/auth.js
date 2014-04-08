hbApp.factory("Auth", function($q, $http, $location) {

  function Auth(opts) {
    var self = this
    self.User = {};
    self.User.email = opts.email;
    self.errors = [];
    self.submitting = false;
    self.endpoint = opts.endpoint;
    self.redirectTo = opts.redirectTo;
    self.errorMsg = opts.errorMsg
  }

  Auth.prototype.submit = function() {
    var self = this
    self.submitting = true;

    $http.post(self.endpoint, {
      email: self.User.email,
      password: self.User.password,
    }).success(function(res) {
      $location.url(self.redirectTo);

      self.submitting = false;
    }).error(function(res) {
      self.errors.push(self.errorMsg);

      self.submitting = false;
    })
  }

  Auth.validate = function() {
    var deferred = $q.defer();

    $http.post("/sessions/validate")
      .success(function(res) {
        deferred.resolve(res);
      }).error(function(res) {
        deferred.reject(res)
        $location.path("/account/signin")
      })

    return deferred.promise;

  }

  return Auth;

})
