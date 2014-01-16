hbApp.factory( "HelloBlock", function( $resource ) {

  var BASE = "https://nodejshelloblock.herokuapp.com/v1"

  return {
    Addresses: $resource( BASE + "/addresses/:address", {
      transactions: true,
      unspents: true
    } ),
    AddressTransactions: $resource( BASE + "/addresses/:address/transactions" ),
    AddressUnspents: $resource( BASE + "/addresses/:address/unspents" ),
    Transactions: $resource( BASE + "/transactions/:tx_hash" ),
    Blocks: $resource( BASE + "/blocks/:identifier" )
  }

} )
