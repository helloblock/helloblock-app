hbApp.controller( "testCtrl", function( $scope ) {

  var addressChannel = io.connect( Socket.URL[ 'testnet' ] + '/addresses' )

  addressChannel.on( 'connect', function( data ) {
    console.log( 'connected' )
  } )

  addressChannel.on( 'mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L', function( data ) {
    console.log( data )
  } )

} )
