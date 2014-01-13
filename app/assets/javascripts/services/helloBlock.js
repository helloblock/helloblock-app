hbApp.factory( "HelloBlock", function( $resource ) {

  var BASE = "https://nodejshelloblock.herokuapp.com/v1"

  return {
    Addresses: $resource( BASE + "/addresses/:address", {
      transactions: true,
      unspents: true
    } ),
    Transactions: $resource( BASE + "/transactions/:tx_hash" ),
    Blocks: $resource( BASE + "/blocks/:block_identifier" )
  }

} )
