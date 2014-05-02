# How to build a wallet (Part 1 of 2)
<br>

In this tutorial, we're going to make a javascript client side Bitcoin Wallet. You may have seen some of these around.

 - [Blockchain.info](https://blockchain.info/wallet)
 - [Carbon Wallet](http://carbonwallet.com/)
 - [Sparecoins](http://sparecoins.io)

Client side wallets allow users to be in control of their money. Unlike Bitcoin-qt, these client side wallets also allow easy web access and don't require users to download the Blockchain as there is generally an API provider.

We get to the nitty gritty of how this works, right down to the raw bytes. But firstly, let's take a high level approach.

A Wallet is just a collection of Bitcoin addresses. To make a functional wallet, we need to

 - ** Create Transactions (Part 1) **
 - ** Manage Addresses/Keys (Part 2) **

We're using [bitcoinjs-lib]() for this tutorial. The library is included on the this, so you can open Chrome console (Apple + Option + J) and follow on.

You can find the full repo on [github.com/helloblock/demo-wallet]()

We also recommend [JSON View]() which beautifies JSON data inside your browser.
<br><br>
## Creating Transactions - The Easy Way
<br>
One of the most difficult things to initially grasp is how to build transactions in Bitcoin. Luckily for us, bitcoinjs-lib provides a convenience methods to build transactions. You don't need to fully understand how Bitcoin transactions to get them working.

Here's some executable code (e.g you can run it in the browser)

```javascript

```
<br><br>
## Creating Transactions - The Hard Way
<br>
Whilst it's useful to get a high level overview, it's important to know the nitty gritty details of how transactions work, especially for Bitcoin. This is because the ecosystem is still primitive, things break all the time and we need to know how to debug.

Here's the detailed code, it will perform the same function as above, but using lower level functions.

```javascript

```

We will walk through step by step how this works. A useful checklist is to:

 1. Ensure you have the private keys.
 2. Get unspent outputs (UTXO) for addresses you want to send money from.
 3. Determine the right transaction value (amount + fee)
 4. Add all necessary inputs (UTXO)
 5. All all desired outputs
    - Make sure to include a change address
 6. Sign the transaction for each input
    - Hash the transaction
    - Sign the hash with your private key
    - Add the hash type to the end of signature
    - Add the signature for the input
    - Repeat for all inputs
 7. Serialize the entire transaction into hexadecimal format
 8. Propagate the transaction

<br>
### What is a transaction?
<br>

A transaction is a transfer of value one set of inputs to a new set of outputs.

Let's look at the raw bytes.

```javascript
  curl https://testnet.helloblock.io/q/getrawtransaction?txHashes=c772d1b8efd97e78aa882b4bfa04bb17a67fca62436010516472367aeb2b28ac

  {
    "status": "success",
    "data": {
      "transactions": [
        {
          "txHash": "c772d1b8efd97e78aa882b4bfa04bb17a67fca62436010516472367aeb2b28ac",
          "rawTxHex": "0100000001cf6b23baf0ebb8a09559f761144ab4407b5dce75a9484ed07a6da41f7f0218e9010000008a4730440220372be617d9d276340846265ddc7ba9dabbe78e97fac97091f7e2cb19ec2929ae02203be15a0a3929b2353ebb81f5d67b20ab3b1e427f124855a2309649858eaa4b340141040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70ffffffff0240420f00000000001976a914a5319d469e1ddd9558bd558a50e95f74b3da58c988ac78c4f81e010000001976a91461b469ada61f37c620010912a9d5d56646015f1688ac00000000"
        }
      ]
    }
  }
```

** INSERT TABLE HERE **
<br><br>
### Private Keys and fees
<br>
Managing Private Keys will be covered in the next tutorial. For now, you may use this pre-generated private key which has already been loaded with some testnet coins. Testnet is an alternative Blockchain used for testing.

```javascript
  var privateKey = '1asdf'
  var key = bitcoin.ECKey.fromWif(privateKey)
```
<br><br>
### Unspents/UTXO
<br>

To build a new valid transaction, we must find previous outputs belonging to an address that have not already been spent. These are referred to as "Unspent Outputs" or "UTXO" for short.

Our Wallet can only use "Unspent Outputs" for the addresses it owns.

Our Wallet balance is also the value of all the Unspents Outputs.

There are 3 important fields we need to get (seen in the byte map above) and add to the pending transaction.
 1. Previous Transaction Hash
 2. Previous Transaction Output Index
 3. Previous Transaction Output Script Pubkey

```javascript
  helloblock.addresses.getUnspents()
```

<br><br>
### Amount/Fees
<br>

You may only spend the entire previous transaction output.

For example, if the UTXO was 10 BTC, you can't simply send a portion of it such as 3 BTC. To spent 3 BTC, you must create 2 outputs

 1. 3 BTC to recipient
 2. 7 BTC back to yourself

To prevent Blockchain spam and DDOS attacks, every Bitcoin transaction must contain a fee. If it does not contain a fee, it is not likely to be accepted into the Blockchain by miners. The average fee is 10000 satoshis, or 0.0001 BTC, per 1000 bytes. Our transaction here is only 257 bytes. If we chooose to add more inputs/outputs, this will increase and we may need to increase the fee.

The fee is the "Total input value" - "Total output value" of a transaction. For example, if you create 2 outputs such that

1. 3 BTC is sent to the recipient
2. 6.999 BTC is sent back to yourself

0.0001 BTC will be regarded as the fee.

If you forget to send 7 BTC back to yourself in the above example, the 'missing' 7 BTC will go to Bitcoin miners as a fee.

```javascript
  var targetvalue = 100000
  var fee = totalInputValue - totalOutputValue;
```

<br>
### Add all inputs/outputs
<br><br>

We can use bitcoinjs-lib to add all the inputs and outputs

```javascript

```

Note that we don't include the input script for now because that requries a signature that we add later (see below).

<br><br>
### Script
<br>

> Bitcoin uses a scripting system for transactions. Forth-like, Script is simple, stack-based, and processed from left to right. It is purposefully not Turing-complete, with no loops.

Some bytes in the script carry a special operation. Here's a list of them []()

A new transaction is valid if the transaction scripts of its input field ```(scriptSig)``` and the transaction script
of its predecessing transaction ```(scriptPubKey)``` validates to true.

In other words, we check if
```javascript
  scriptSig + scriptPubKey === true
```

You can see these components individually in the bytemap above.

In standard transactions, the ```scriptSig``` component looks like ```<signature> <pubkey>```

the ```scriptPubKey``` component then looks like ```OP_DUP OP_HASH160 <pubkeyhash> OP_EQUALVERIFY OP_CHECKSIG```

Put together, the following expression must evaluate to true for valid transactions,

```bash
  &lt;signature&gt; &lt;pubkey&gt; OP_DUP OP_HASH160 &lt;pubkeyhash&gt; OP_EQUALVERIFY OP_CHECKSIG
```

Now the whole thing with actual data,

```javascript
  30440220372be617d9d276340846265ddc7ba9dabbe78e97fac97091f7e2cb19ec2929ae02203be15a0a3929b2353ebb81f5d67b20ab3b1e427f124855a2309649858eaa4b3401 040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70 OP_DUP OP_HASH160 e06c30499eec71471ba28f4d684c8e1e515f7462 OP_EQUALVERIFY OP_CHECKSIG
```

Bitcoin nodes in the network run the script when they hear about a transaction.

There are many possibilities in what this scripting language offers (e.g. Multi-signature transactions) but this will be explored in another tutorial.

How this expression is evaluated is also beyond the scope of this tutorial. You may wish to read [this guide]() to get a better sense of how this works.

<br><br>
### Signing
<br>

To prove that you control a particular address you will have to sign the transaction. You sign over the whole transaction so evesdroppers can't simply just substitute the output address to themselves and steal all your money. This would invalidate the original signature.

See [this video]() if you would like a primer on how digital signatures work.

Signing Bitcoin transactions can be a difficult process and very error-prone.

In the above example, we saw the input script blanked on ```script: undefined```, this is because the input script itself would contain the signature (and the public key).

```javascript

```

So what do we actually sign? For standard transactions, we will need to sign over the

  - previous output Script
  - current outputs

We need to get all that information, double hash it (SHA256), and sign it with our ECDSA Key

```javascript

```

Then, we append the HASHTYPE to the end of the signature. For standard transactions, this is ```SIGHASH_ALL ``` represented by 0x01

There are different hash types which result in different ways of howthe bitcoin protocol checks the signature. These will be covered in a different tutorial.

<br><br>
### Serialize/propagate
<br>

We're almost done. Now all we need to do is serialize the transaction, converting into a hexadecimal format this is it input type for most APIs, clis.

```javascript
  var rawTxHex = newTx.serialize()
```
There are a few ways to propagate

 - 3rd party APIs
 - Your own bitcoind instance
 - Custom node implementation

For convenience we will propagate using the HelloBlock API

You may also wish to check/decode the transaction before you propagate it just to make sure everything looks correct.

[https://helloblock.io](https://helloblock.io/decode?rawTxhex="asdf")

```javascript
var rawTxHex = ""
  helloblock.transactions.propagate()
```

And now we're done!

<br><br>

# Appendix A: More on the HelloBlock API
<br>

## Testing

/testnet; faucet

## Convenience Methods

A Wallet is a collection of addresses and often times, you will need to display the total balance for all addresses and propagate transactions using unspent outputs from multiple addresses.

/wallet

# Futher Resources

 - http://bitcoinhistory.net/Technical_Papers/ProgrammingBitcoinTransactionScripts.pdf
 - http://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.html
