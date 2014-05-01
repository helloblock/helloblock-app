### Headlines
How to create a Bitcoin Wallet

How to create a Javascript Bitcoin Wallet

How to create a Blockchain.info-like Bitcoin Wallet

Build your own Bitcoin Wallet

### Resources
http://bitcoinhistory.net/Technical_Papers/ProgrammingBitcoinTransactionScripts.pdf
http://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.html
http://bitcoin.stackexchange.com/questions/3374/how-to-redeem-a-basic-tx

### Tasks

1.
- intial code sample
- Send money (create transactions)
- Bytes/OP Code
- Stack
- Receive money/Transaction History
- Different transaction types, multisig, p2sh
- Testing, mocha, Faucet
- JSON View

2.
 - Creating/Manage addresses
 - Key generation vulnerabilities
 - HD Wallet
 - Other options, seeds, p2sh, secret sharing

require 'bitcoinjs-lib', '0.2.0' here
require 'helloblock-js'

images
seeing the script being executed on the stack was helpful

/decode endpoint; .toASM()
/propagate clean up?

### Transaction building painpoints

Do you have to spend bitcoin everytime? No! testnet.
LE/BE
scriptSig vs scriptPubKey
What does OP_DUP mean? How is that executed on the stack?
What's an unspent? UTXO
What is serializing? Why hex? Take binary?
What is signing, what are we signing? Why do we script?
hashTransactionForSignature
hash types

# How to build a wallet (Part 1 of 2)

## Introduction

In this tutorial, we're going to make a javascript client side Bitcoin Wallet. You may have seen some of these around.

 - [Blockchain.info](https://blockchain.info/wallet)
 - Carbon Wallet
 - [Sparecoins](http://sparecoins.io)

Client side wallets allow users to be in control of their money.

We get to the nitty gritty of how this works, right down to the raw bytes. But firstly, let's take a high level approach.

A Wallet is just a collection of Bitcoin addresses. To make a functional wallet, we need to

 - Send/Receive Bitcoins (Part 1)
 - Manage the private keys and addresses (Part 2)

We're using [bitcoinjs-lib]() for this tutorial. The library is included on the this, so you can open Chrome console (Apple + Option + J) and follow on.

## Building Transactions - The Easy Way

One of the most difficult things to initially grasp is how to build transactions in Bitcoin. Luckily for us, bitcoinjs-lib provides a convenience methods to build transactions. You don't need to fully understand how Bitcoin transactions to get them working.

Here's some executable code (e.g you can run it in the browser)

```javascript

```

## Building Transactions - The Hard Way

Whilst it's useful to get a high level overview, it's important to know the nitty gritty details of how transactions work, especially for Bitcoin. This is because the ecosystem is still primitive, things break all the time and we need to know how to debug.

Here's the detailed code, it will perform the same function as above, but using lower level functions.

```javascript

```

We will walk through step by step how this works. Here's a useful checklist

 - Ensure you have the private keys.
 - Get unspent outputs (UTXO) for the keys
 - Determine the right transaction value (amount + fee)
 - Add all necessary inputs (UTXO)
 - All all desired outputs
    - Make sure to include a change address
 - Sign the transaction for each input
    - Hash the transaction
    - Sign the hash with your private key
    - Add the hash type to the end of signature
    - Add the signature for the input
    - Repeat for all inputs
 - Serialize the entire transaction into hexadecimal format
 - Propagate the transaction

### What is a transaction?

A transaction is a transfer of value one set of inputs to a new set of outputs.

Let's look at the raw bytes.

```bash
  curl https://testnet.helloblock.io/q/getrawtransaction?txHashes=c772d1b8efd97e78aa882b4bfa04bb17a67fca62436010516472367aeb2b28ac
```

| Field | Bytes    | Type  | Value|
| ------- | -------- |
| Version   | 01 00 00 00 |
| Input Count | 01 |
| Previous Output Hash | cf 6b 23 ba f0 eb b8 a0 95 59 f7 61 14 4a b4 40 7b 5d ce 75 a9 48 4e d0 7a 6d a4 1f 7f 02 18 e9
| Index | 01 00 00 00 |
| Script Length | 8a |
| scriptSig | 47 30 44 02 20 37 2b e6 17 d9 d2 76 34 08 46 26 5d dc 7b a9 da bb e7 8e 97 fa c9 70 91 f7 e2 cb 19 ec 29 29 ae 02 20 3b e1 5a 0a 39 29 b2 35 3e bb 81 f5 d6 7b 20 ab 3b 1e 42 7f 12 48 55 a2 30 96 49 85 8e aa 4b 34 01 41 04 0c fa 3d fb 35 7b df f3 7c 87 48 c7 77 1e 17 34 53 da 5d 7c aa 32 97 2a b2 f5 c8 88 ff f5 bb ae b5 fc 81 2b 47 3b f8 08 20 69 30 fa de 81 ef 4e 37 3e 60 03 98 86 b5 10 22 ce 68 90 2d 96 ef 70 |
| Sequence | ff ff ff ff |
| Outputs Count | 02 |
| Value | 40 42 0f 00 00 00 00 00 |
| Script Length | 19 |
| Script Pubkey | 76 a9 14 a5 31 9d 46 9e 1d dd 95 58 bd 55 8a 50 e9 5f 74 b3 da 58 c9 88 ac |
| Value | 78 c4 f8 1e 01 00 00 00 |
| Script Length | 19 |
| Script Pubkey | 76 a9 14 61 b4 69 ad a6 1f 37 c6 20 01 09 12 a9 d5 d5 66 46 01 5f 16 88 ac |
| Block Time | 00 00 00 00 |




### Private Keys and fees

ECDSA, elliptic curve

### Unspents/UTXO

Once a previous input has been 'spent', and becomes a new output, then that previous input can no longer be used again.

Previous inputs that have not been spent are referred to as "Unspent Outputs" or "UTXO" for short.

This is important because our Wallet can only use Unspent Outputs to build and propagate new transactions.

The value of all the Unspents Outputs is also the balance for an address.

### Fees

Can only spend the entire previous output

Fee is total input value - total output value

10000 satoshis per 1000 bytes

### Add all inputs/outputs

### Script

You may have seen something like this

```javascript
  OP_DUP OP_HASH160 e06c30499eec71471ba28f4d684c8e1e515f7462 OP_EQUALVERIFY OP_CHECKSIG
```

This is a Bitcoin Script, the underlying executables that are evaluated everything a transaction is propagated.

Bitcoin nodes around the world check/run this script

You could put lots of things in here, but for now, let's just stick to the standard script as above.

** scriptSig and scriptPubKey **


### Signing

### Serialize/propagate

Convert to hex, big endian, little endian
bitcoinjs-lib will handle this for you

You may wish to do this via bitcoind

/decode
/propagate

Propagate through the HelloBlock API.


## Convenience Methods

A Wallet is a collection of addresses and often times, you will need to display the total balance for all addresses and propagate transactions using unspent outputs from multiple addresses.

/wallet
