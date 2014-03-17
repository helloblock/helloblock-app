hbApp.factory("HelloBlockSocket", function($rootScope) {

  var Socket = {};

  Socket.URL = {
    mainnet: "wss://mainnet-helloblock-socket.herokuapp.com",
    testnet: "wss://testnet-helloblock-socket.herokuapp.com"
  };

  Socket.beep = function() {
    if ($rootScope.global.sound === 1) {
      var file = "/beep.wav";
      (new Audio(file)).play()
    }
  };

  return Socket;
})
