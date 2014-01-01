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
	}, {
		name: "1",
		endpoint: "/1"
	}, {
		name: "2",
		endpoint: "/3"
	}, {
		name: "3",
		endpoint: "/3"
	}, {
		name: "4",
		endpoint: "/4"
	}, {
		name: "5",
		endpoint: "/5"
	}, ]

} )
