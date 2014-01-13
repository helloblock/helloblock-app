'use strict'

hbApp.factory( "HelloBlock", function( $resource ) {

	var BASE = "https://nodejshelloblock.herokuapp.com/v1"

	return {
		Transactions: $resource( BASE + "/transactions/:tx_hash" ),
		Addresses: $resource( BASE + "/transactions/:tx_hash" ),
		Blocks: $resource( BASE + "/transactions/:tx_hash" )
	}

} )
