'use strict'

hbApp.controller( "docsCtrl", function( $scope ) {

	$scope.methods = [ {
		name: "Introduction",
		endpoint: "/intro"
	}, {
		name: "Transactions",
		endpoint: "/tx"
	}, {
		name: "Addresses",
		endpoint: "/addr"
	}, {
		name: "Blocks",
		endpoint: "/multiaddr"
	}, {
		name: "Bitcoin",
		endpoint: "/address"
	}, {
		name: "Wallet",
		endpoint: "/unspents"
	}, {
		name: "Multi",
		endpoint: "/multitx"
	}, {
		name: "Relay",
		endpoint: "/pushtx"
	} ]

} )
