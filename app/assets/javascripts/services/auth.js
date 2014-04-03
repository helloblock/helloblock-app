hbApp.factory("Auth", function($q, $timeout) {

  var Authenticator = {}

  Authenticator.verify = function(username, password) {
    var HOST = "https://";

    console.log("TODO: call host with username/password ...")

    var defer = $q.defer();

    $timeout(function() {
      defer.notify("checking ...")
    }, 0)

    defer.resolve('asdf')

    return defer.promise;
  }

  return Authenticator;

})
