'use strict'

hbApp.factory("Definitions", function() {
	return function() {
		var definitions = [{
			name: "addresses",
			method: "GET",
			batch: false,
			definition: "GET /addresses/:address",
			parameters: [{
				key: "address",
				value: "n25NdiLR7X6TPLRkpYSX3zn6kLYGWLPMnK",
			}, {
				key: "txs",
				value: "true",
			}]
		}, {
			name: "addresses",
			method: "GET",
			batch: true,
			definition: "GET /addresses (batch)",
			parameters: [{
				key: "addresses[]",
				value: "mu1izpJmF7CHnbVcH59f1PqfvXnmiBEMq8",
			}, {
				key: "addresses[]",
				value: "mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3",
			}, {
				key: "addresses[]",
				value: "n25NdiLR7X6TPLRkpYSX3zn6kLYGWLPMnK",
			}, {
				key: "txs",
				value: "true",
			}, {
				key: "wallet",
				value: "true",
			}, {
				key: "info",
				value: "true",
			}]
		}, {
			name: "unspents",
			method: "GET",
			batch: true,
			definition: "GET /unspents (batch)",
			parameters: [{
				key: "addresses[]",
				value: "mu1izpJmF7CHnbVcH59f1PqfvXnmiBEMq8",
			}, {
				key: "addresses[]",
				value: "mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3",
			}, {
				key: "addresses[]",
				value: "n25NdiLR7X6TPLRkpYSX3zn6kLYGWLPMnK",
			}]
		}, {
			name: "transactions",
			method: "GET",
			batch: false,
			definition: "GET /transactions/:transaction",
			parameters: [{
				key: "tx_hash",
				value: "2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738",
			}]
		}, {
			name: "transactions",
			method: "GET",
			batch: true,
			definition: "GET /transactions (batch)",
			parameters: [{
				key: "tx_hashes[]",
				value: "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3",
			}, {
				key: "tx_hashes[]",
				value: "770e6e4c66fc61fb523e5aefe11780b26c8473638e7065ca726a6492ab7f6345",
			}, {
				key: "tx_hashes[]",
				value: "47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0",
			}]
		}, {
			name: "transactions",
			method: "POST",
			batch: false,
			definition: "POST /transactions",
			parameters: [{
				key: "tx_hex",
				value: "TODO",
			}]
		}, {
			name: "blocks",
			method: "GET",
			batch: false,
			definition: "GET /blocks/:block_height",
			parameters: [{
				key: "block_height",
				value: "99999",
			}, {
				key: "txs",
				value: "true",
			}]
		}]

		return definitions
	}
})
