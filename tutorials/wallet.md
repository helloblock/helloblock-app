### Headlines
How to create a Bitcoin Wallet

How to create a Javascript Bitcoin Wallet

How to create a Blockchain.info-like Bitcoin Wallet

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

/decode endpoint
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

Let's make a javascript client side Bitcoin Wallet. You may have seen some of these around.

 - Blockchain.info
 - Carbon Wallet
 - Sparecoins

Client side wallets are important because it allows users to be in control of their money.

We get to the nitty gritty of how this works, right down to the raw bytes. But firstly, let's take a high level approach.

A Wallet is just a collection of Bitcoin addresses

To make a functional wallet, we need to

 - Send/Receive Bitcoins (Part 1)
 - Manage the private keys and addresses (Part 2)

We're using bitcoinjs-lib for this tutorial. You can open Chrome console (Apple + Option + J) and follow on.

## The Easy Way

One of the most difficult things to initially grasp is how to build transactions in Bitcoin. Luckily for us, bitcoinjs-lib provides a simple Wallet class to manage building transactions. You don't really need to understand how Bitcoin transactions are constructed to make it work.

Here's some executable code (e.g you can run it in the browser)

```javascript

```

## The Hard Way

But because Bitcoin as a Protocol hasn't fully been explorered yet, let's going into how this all actually works.

Again, here's the initial working code.

What is happening here? What are the things we need to

Transaction Checklist

 - have the private keys
 - get unspent outputs
 - set the value, amount + fee
 - add all the inputs, which are unspent outputs
 - add all outputs
    - determine change amount/address
 - sign the whole transaction for each input
    - hash transaction for signature
    - sign the hash with ecdsa signing
    - add hash type to the end of signature
    - include signature for input
    - repeat for all inputs
 - serialize the entire transaction into hex
 - propagate the hex

### What is a transaction?

First we need to understand what is a transaction?

A good way to understand is to look at how the historical General Law system worked.

Pre 1800s, there was no central registry for Property (land) as there is today (ORG).

Title was proved based on a chain of previous titles, originating back to the Crown.

Unfortunately this model did not work very well because X

This is referred to as the Byzantine General's problem in Computer Science, which was a solved by Satoshi Nakamoto in his proof-of-work concept.

Traditionally, from account A to account B with value.

With Bitcoin, it's about from input A to new output.

Similarly, it could be multiples inputs to multiple outputs

Thinking of this a property being passed from one address to another

### Raw Bytes Map

// show where you are in raw byte map below

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

### Add all inputs/outputs

### Script

You may have seen something like this

```
OP_DUP OP_HASH160 e06c30499eec71471ba28f4d684c8e1e515f7462 OP_EQUALVERIFY OP_CHECKSIG
```

This is a Bitcoin Script, the underlying executables that are evaluated everything a transaction is propagated.

Bitcoin nodes around the world check/run this script

You could put lots of things in here, but for now, let's just stick to the standard script as above.

### scriptSig and scriptPubKey



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
