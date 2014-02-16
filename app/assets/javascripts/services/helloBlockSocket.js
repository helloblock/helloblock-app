hbApp.factory( "HelloBlockSocket", function( $rootScope ) {

  var Socket = {
    URL: {
      mainnet: "https://mainnet-helloblock-socket.herokuapp.com:443",
      testnet: "https://testnet-helloblock-socket.herokuapp.com:443"
    },
    beep: null
  }

  Socket.beep = function() {
    if ( $rootScope.global.sound === 1 ) {
      var file = "/beep.wav";
      ( new Audio( file ) ).play()
    }
  }

  return Socket;
} )
