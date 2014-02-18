hbApp.factory( "HelloBlock", function( $resource, $rootScope ) {

  var explorerModes = [ {
    name: "mainnet",
    url: "https://mainnet-helloblock-production.herokuapp.com/v1"
  }, {
    name: "testnet",
    url: "https://testnet-helloblock-production.herokuapp.com/v1"
  } ]

  var ENDPOINTS = {};

  explorerModes.forEach( function( mode ) {
    ENDPOINTS[ mode.name ] = {
      Addresses: $resource( mode.url + "/addresses/:address", {
        transactions: true,
        unspents: true
      } ),
      AddressTransactions: $resource( mode.url + "/addresses/:address/transactions" ),
      AddressUnspents: $resource( mode.url + "/addresses/:address/unspents" ),
      Transactions: $resource( mode.url + "/transactions/:tx_hash" ),
      TransactionsDecode: $resource( mode.url + "/transactions/decode" ),
      Blocks: $resource( mode.url + "/blocks/:identifier" ),
      BlockTransactions: $resource( mode.url + "/blocks/:identifier/transactions" )
    }
  } )

  return ENDPOINTS;

} )
