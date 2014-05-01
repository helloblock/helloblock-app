### Headlines
How to create a Bitcoin Wallet

How to create a Javascript Bitcoin Wallet

How to create a Blockchain.info-like Bitcoin Wallet

### Parts

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
 - HD Wallet
 - Other options, seeds, p2sh, secret sharing

require 'bitcoinjs-lib', '0.2.0' here

### Common questions



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


### Transactions

What is a Bitcoin Transaction?

// rawtxhex

Raw bytes map
