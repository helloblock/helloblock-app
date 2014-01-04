'use strict'

hbApp.factory( "Definitions", function() {
	return function() {
		var definitions = [ {
			name: "addresses",
			type: "GET",
			definition: "GET /addresses/:address",
			parameters: [ {
				key: "keyz",
				value: "valuez",
			}, {
				key: "nutha",
				value: "duoood",
			} ]
		}, {
			name: "addresses",
			type: "BATCH GET",
			definition: "GET /addresses (batch)",
			parameters: [ {
				key: "addresses[]=",
				value: "asdfasdf",
			}, {
				key: "addresses[]=",
				value: "fdsafdsaf",
			} ]
		}, {
			name: "unspents",
			type: "BATCH GET",
			definition: "GET /addresses/:address",
			parameters: [ {
				key: "keyz",
				value: "valuez",
			}, {
				key: "nutha",
				value: "duoood",
			} ]
		}, {
			name: "addresses",
			type: "GET",
			definition: "GET /addresses/:address",
			parameters: [ {
				key: "keyz",
				value: "valuez",
			}, {
				key: "nutha",
				value: "duoood",
			} ]
		}, {
			name: "addresses",
			type: "GET",
			definition: "GET /addresses/:address",
			parameters: [ {
				key: "keyz",
				value: "valuez",
			}, {
				key: "nutha",
				value: "duoood",
			} ]
		}, {
			name: "addresses",
			type: "GET",
			definition: "GET /addresses/:address",
			parameters: [ {
				key: "keyz",
				value: "valuez",
			}, {
				key: "nutha",
				value: "duoood",
			} ]
		}, {
			name: "addresses",
			type: "GET",
			definition: "GET /addresses/:address",
			parameters: [ {
				key: "keyz",
				value: "valuez",
			}, {
				key: "nutha",
				value: "duoood",
			} ]
		} ]

		return definitions
	}
} )
