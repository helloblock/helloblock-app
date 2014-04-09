hbApp.factory("Account", function($q, $http, $location) {

  function Account(opts) {
    var self = this;
    self.User = {};
    self.User.email = opts.email;
    self.errors = [];
    self.submitting = false;
    self.endpoint = opts.endpoint;
    self.redirectTo = opts.redirectTo;
    self.errorMsg = opts.errorMsg;
  }

  Account.prototype.submit = function(method, payload) {
    var self = this
    self.submitting = true;

    $http[method](self.endpoint, payload).success(function(res) {
      $location.url(self.redirectTo);

      self.submitting = false;
    }).error(function(res) {
      self.errors.push(self.errorMsg);

      self.submitting = false;
    })
  }

  Account.authenticate = function() {
    var deferred = $q.defer();

    $http.post("/sessions/authenticate")
      .success(function(res) {
        deferred.resolve(res);
      }).error(function(res) {
        deferred.reject(res)
        $location.path("/account/signin")
      })

    return deferred.promise;

  }

  return Account;

})
