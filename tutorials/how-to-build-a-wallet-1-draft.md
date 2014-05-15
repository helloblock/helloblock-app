# How to build a wallet (Part 1 of 2)
<br>

In this tutorial, we're going to make a JavaScript client side Bitcoin Wallet. You may have seen some of these around:

 - [Blockchain.info](https://blockchain.info/wallet)
 - [Carbon Wallet](http://carbonwallet.com/)
 - [Sparecoins](http://sparecoins.io)

Web client side wallets allow users to be in control of their money. But, unlike desktop clients such as Bitcoin-qt, they allow easy web access and don't require users to download the Blockchain. There is generally a Blockchain API provider backing it.

A Wallet is a collection of Bitcoin addresses. To make a functional wallet, we need to

  1. ** Build Transactions (Part 1) **
  2. Manage Addresses/Keys (Part 2)

You can find the full repo on [github.com/helloblock/demo-wallet](https://github.com/helloblock/demo-wallet)

<br>
## Dependencies
<br>

Client side JavaScript wallets cannot use the official reference client ```bitcoind```. However, [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) is a well-maintained reimplementation of the Bitcoin protocol in JavaScript. This is what we'll be using.

*The library is included on this page, so you can open your browser console and follow along.*


### Browser

```html
&lt;script src="https://s3.amazonaws.com/helloblock-cdn/bitcoinjs-lib.min.js"&gt;&lt;/script&gt;
&lt;script src="https://s3.amazonaws.com/helloblock-cdn/helloblock-js.min.js"&gt;&lt;/script&gt;
```


### Node.js

```javascript
var bitcoin = require("bitcoinjs-lib")
var helloblock = require('helloblock-js')({
  network: 'testnet'
})
```

<br>
## Building Transactions - The Easy Way
<br>
Building raw Bitcoin transactions are hard. Fortunately, bitcoinjs-lib provides a convenience methods to build transactions. You don't need to fully understand Bitcoin transactions to make them working.

Here's the easy way of doing it. The code is executable in the browser. We've already loaded the private key with some testnet Bitcoins. But you can hit the [Faucet](https://helloblock.io/docs/ref#faucet) if it runs out.



```javascript
var helloblock = new HelloBlock({
  network: 'testnet'
})

var addressVersion = bitcoin.network.testnet.addressVersion

var privateKey = "cND8kTK2zSJf1bTqaz5nZ2Pdqtv43kQNcwJ1Dp5XWtbRokJNS97N"
var ecKey = new bitcoin.ECKey(privateKey)
var ecKeyAddress = ecKey.getAddress(addressVersion).toString()
var toAddress = 'mzPkw5EdvHCntC2hrhRXSqwHLHpLWzSZiL'

var txFee = 10000
var txTargetValue = 200000

helloblock.addresses.getUnspents(ecKeyAddress, {
  value: txTargetValue + txFee
}, function(err, res, unspents) {
  if (err) throw new Error(err)

  var tx = new bitcoin.Transaction()

  var totalUnspentsValue = 0
  unspents.forEach(function(unspent) {
    tx.addInput(unspent.txHash, unspent.index)
    totalUnspentsValue += unspent.value
  })

  tx.addOutput(toAddress, txTargetValue)

  var txChangeValue = totalUnspentsValue - txTargetValue - txFee
  tx.addOutput(ecKeyAddress, txChangeValue)

  tx.sign(0, ecKey)

  var rawTxHex = tx.serializeHex()

  helloblock.transactions.propagate(rawTxHex, function(err, res, tx) {
    if (err) throw new Error(err)

    console.log('https://test.helloblock.io/transactions/' + tx.txHash)
  })
})


```
<br>
## Building Transactions - The Hard Way
<br>
Whilst it's useful to get a high level overview, it's important to know the nitty gritty details of how transactions work, especially for Bitcoin. This is because the ecosystem is still primitive, things break all the time and we need to know how to debug.

Here's the hard way to doing it. This will perform the same function as above, but using lower level methods.

```javascript
var helloblock = new HelloBlock({
  network: 'testnet'
})

var addressVersion = bitcoin.network.testnet.addressVersion

var privateKey = "cND8kTK2zSJf1bTqaz5nZ2Pdqtv43kQNcwJ1Dp5XWtbRokJNS97N"
var ecKey = new bitcoin.ECKey(privateKey)
var ecKeyAddress = ecKey.getAddress(addressVersion).toString()
var toAddress = 'mzPkw5EdvHCntC2hrhRXSqwHLHpLWzSZiL'

var txFee = 10000
var txTargetValue = 200000

helloblock.addresses.getUnspents(ecKeyAddress, {
  value: txTargetValue + txFee
}, function(err, response, unspents) {
  if (err) throw new Error(err)

  var tx = new bitcoin.Transaction()

  var totalUnspentsValue = 0

  // INPUTS
  // HelloBlock selects the optimal unspent outputs above using 'value'
  // Now, we add all unspent outputs as an input in this transaction
  unspents.forEach(function(unspent) {
    var input = new bitcoin.TransactionIn({
      sequence: [255, 255, 255, 255],
      outpoint: {
        hash: unspent.txHash,
        index: unspent.index
      }
    })

    tx.ins.push(input)

    totalUnspentsValue += unspent.value
  })

  // OUTPUTS
  // Output 1: Send value to recipient
  var recipientScript = new bitcoin.Script()
  var toAddressObj = new bitcoin.Address(toAddress, addressVersion)

  recipientScript.writeOp(bitcoin.Opcode.map.OP_DUP)
  recipientScript.writeOp(bitcoin.Opcode.map.OP_HASH160)
  recipientScript.writeBytes(toAddressObj.hash)
  recipientScript.writeOp(bitcoin.Opcode.map.OP_EQUALVERIFY)
  recipientScript.writeOp(bitcoin.Opcode.map.OP_CHECKSIG)

  var recipientOutput = new bitcoin.TransactionOut({
    value: txTargetValue,
    script: recipientScript
  })

  tx.outs.push(recipientOutput)

  // Output 2: Send change back to self
  var changeScript = new bitcoin.Script()
  var changeValue = totalUnspentsValue - txTargetValue - txFee

  changeScript.writeOp(bitcoin.Opcode.map.OP_DUP)
  changeScript.writeOp(bitcoin.Opcode.map.OP_HASH160)
  changeScript.writeBytes(ecKey.getAddress(addressVersion).hash)
  changeScript.writeOp(bitcoin.Opcode.map.OP_EQUALVERIFY)
  changeScript.writeOp(bitcoin.Opcode.map.OP_CHECKSIG)

  var changeOutput = new bitcoin.TransactionOut({
    value: changeValue,
    script: changeScript
  })

  tx.outs.push(changeOutput)

  // SIGNING
  var sigHashAll = 1
  var ecKeyPub = ecKey.getPub().toBytes()
  tx.ins.forEach(function(input, index) {
    var connectedScript = bitcoin.Script.fromHex(unspents[index].scriptPubKey)

    var txSigHash = tx.hashTransactionForSignature(connectedScript, index, sigHashAll)
    var signature = ecKey.sign(txSigHash).concat([sigHashAll])

    var inputScript = new bitcoin.Script()
    inputScript.writeBytes(signature)
    inputScript.writeBytes(ecKeyPub)

    input.script = inputScript
  })

  var rawTxHex = tx.serializeHex()

  helloblock.transactions.propagate(rawTxHex, function(err, response, resource) {
    if (err) throw new Error(err)

    console.log('https://test.helloblock.io/transactions/' + resource.txHash)
  })
})

```
<br>
The rest of the tutorial will run through this code step-by-step. Here's a checklist:

 1. Ensure you have the private keys.
 2. Get unspent outputs (UTXO) for address you want to send money from.
 3. Determine the right transaction value (amount + fee).
 4. Add all necessary inputs (UTXO).
 5. Add all desired outputs:
    - Make sure to include a change address.
 6. Sign the transaction for each input:
    - Hash the transaction,
    - Sign the hash with your private key,
    - Add the hash type to the end of signature,
    - Add the signature to the input,
    - Add the public key to the input,
    - Repeat for all inputs.
 7. Serialize the entire transaction into hexadecimal format.
 8. Propagate the transaction.

<br>
### What is a transaction?
<br>

A transaction is generally a transfer of value from one Bitcoin address to another (or multiple).

Let's see what a raw Bitcoin transaction looks like. You can get raw transactions from the HelloBlock API by providing the txHash as follows.

```bash
  # Example Request
curl https://testnet.helloblock.io/q/getrawtransaction?txHashes=c772d1b8efd97e78aa882b4bfa04bb17a67fca62436010516472367aeb2b28ac


  # Example Response
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

```rawTxHex``` is the raw transaction (hexadecimal representation) containing all the information about inputs/outputs, type of transaction, value transferred etc...

```txHash``` is the shorthand ID for ```rawTxHex```. It is calculated by double hashing (SHA256) ```rawTxHex```.

```rawTxHex```, when decoded, can be represented as a byte map. See the [Transaction Wiki Page](https://en.bitcoin.it/wiki/Transactions) for more details.

<br>

<table class='table table-condensed table-bordered'>
  <thead>
    <tr>
      <th colspan='2' colspan="2">Field</th>
      <th>Bytes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan='2'>Version</td>
      <td>01 00 00 00</td>
    </tr>
    <tr>
      <td colspan='2'>Input Count</td>
      <td>01</td>
    </tr>
    <tr>
      <td colspan='1' rowspan='5'>Inputs (1st)</td>
      <td colspan='1'>Previous Output Hash</td>
      <td>cf 6b 23 ba f0 eb b8 a0 95 59 f7 61 14 4a b4 40 7b 5d ce 75 a9 48 4e d0 7a 6d a4 1f 7f 02 18 e9</td>
    </tr>
    <tr>
      <td colspan='1'>Index</td>
      <td>01 00 00 00</td>
    </tr>
    <tr>
      <td colspan='1'>Script Length</td>
      <td>8a</td>
    </tr>
    <tr>
      <td colspan='1'>Script Sig</td>
      <td>47 30 44 02 20 37 2b e6 17 d9 d2 76 34 08 46 26 5d dc 7b a9 da bb e7 8e 97 fa c9 70 91 f7 e2 cb 19 ec 29 29 ae 02 20 3b e1 5a 0a 39 29 b2 35 3e bb 81 f5 d6 7b 20 ab 3b 1e 42 7f 12 48 55 a2 30 96 49 85 8e aa 4b 34 01 41 04 0c fa 3d fb 35 7b df f3 7c 87 48 c7 77 1e 17 34 53 da 5d 7c aa 32 97 2a b2 f5 c8 88 ff f5 bb ae b5 fc 81 2b 47 3b f8 08 20 69 30 fa de 81 ef 4e 37 3e 60 03 98 86 b5 10 22 ce 68 90 2d 96 ef 70</td>
    </tr>
    <tr>
      <td colspan='1'>Sequence</td>
      <td>ff ff ff ff</td>
    </tr>
    <tr>
      <td colspan='2'>Outputs Count</td>
      <td>02</td>
    </tr>
    <tr>
      <td colspan='1' rowspan='3'>Outputs (1st)</td>
      <td>Value</td>
      <td>40 42 0f 00 00 00 00 00</td>
    </tr>
    <tr>
      <td>Script Length</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Script Pubkey</td>
      <td>76 a9 14 a5 31 9d 46 9e 1d dd 95 58 bd 55 8a 50 e9 5f 74 b3 da 58 c9 88 ac</td>
    </tr>
    <tr>
      <td rowspan='3'>Outputs (2nd)</td>
      <td>Value</td>
      <td>78 c4 f8 1e 01 00 00 00</td>
    </tr>
    <tr>
      <td>Script Length</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Script Pubkey</td>
      <td>76 a9 14 61 b4 69 ad a6 1f 37 c6 20 01 09 12 a9 d5 d5 66 46 01 5f 16 88 ac</td>
    </tr>
    <tr>
      <td colspan='2'>Block Time</td>
      <td>00 00 00 00</td>
    </tr>
  </tbody>
</table>

<br>
### Private Keys
<br>
You must first ensure you have the private keys required.

Managing private keys will be covered in the next tutorial. For now, you can use this pre-generated private key which has already been loaded with some testnet coins. Testnet is an alternative Blockchain used for testing.

```javascript
  var privateKey = "cND8kTK2zSJf1bTqaz5nZ2Pdqtv43kQNcwJ1Dp5XWtbRokJNS97N"
  var ecKey = new bitcoin.ECKey(privateKey)

  var addressVersion = bitcoin.network.testnet.addressVersion
  var ecKeyAddress = ecKey.getAddress(addressVersion).toString()
```
<br>
### Unspents/UTXO
<br>

Bitcoin Transactions work by checking if a particular transaction refers to a previous transaction. This gets checked all the way back to the original 'coinbase' transaction, generated by the Bitcoin miners.

We cannot use a previous transaction output that has already been spent. That would be double spending.

Therefore, we can only use unspent previous transaction outputs ("UTXO"/"unspents" for short) in order to build valid future transactions.

The address balance is be the sum of all the unspents. In order words, it is the sum of all the Bitcoins that has been received minus the Bitcoins that have been sent.

There are 3 important fields we need to get when using unspents. (see byte map above)
 1. Previous Transaction Hash
 2. Previous Transaction Output Index
 3. Previous Transaction Output Script Pubkey

```javascript
helloblock.addresses.getUnspents(ecKeyAddress, {
  value: txTargetValue + txFee
}, function(err, response, unspents) {

// ...
}
```

<br>
### Amount/Fees
<br>

A common gotcha is that we may only spend the entire unspent previous transaction output.

For example, if the unspent was 10 BTC, we can't simply send 3 BTC. To spend 3 BTC, we must create 2 outputs

 1. 3 BTC to the recipient.
 2. 7 BTC back to ourself, just like change.

To prevent Blockchain spam and DDOS attacks, every Bitcoin transaction must contain a fee. If it does not contain a fee, it is not likely to be accepted into the Blockchain by miners. The current fee is 10000 satoshis, or 0.0001 BTC, per 1000 bytes. Our transaction here is only 257 bytes. The size will increase if we add lots of inputs/outputs.

The fee is calculated as the "Total Input value" - "Total Output value" of a transaction.

For example, let's assume the Total Input Value, all the unspents we're going to use, is 10 BTC. To pay the 0.0001 BTC in fees, your outputs should be:

1. 3 BTC to the recipient
2. 6.9999 BTC back to ourself

If you forget to send Bitcoins back to ourself, the 'missing' 7 BTC will go to Bitcoin miners as a fee.

```javascript
var totalInputsValue = 1000000000

var totalRecipientValue = 300000000
var totalChangeValue = 699990000
var fee = totalInputsValue - (totalRecipientValue + totalChangeValue)
//=> 10000
```

<br>
### Script
<br>

One thing you may have wondered is how Bitcoins actually get sent to/from addresses.

> "Bitcoin uses a scripting system for transactions. Forth-like, Script is simple, stack-based, and processed from left to right. It is purposefully not Turing-complete, with no loops."

Each input and output in a Bitcoin transaction carries a script - a set of instructions that is executed by the miners and nodes.

Here's a list of operations we can perform - [Bitcoin Script Wiki](https://en.bitcoin.it/wiki/Script)

A new transaction is valid if
 - ```scriptSig``` of the current input, combinated with
 - ```scriptPubKey``` of the previous output,

evaluates to true.

In other words, we check if
```javascript
  scriptSig + scriptPubKey === true
```

What is ```scriptSig``` and ```scriptPubKey``` ?

```scriptPubKey``` is an encumbrance that restricts how future transactions can may be spent.

```scriptSig``` tries to redeem Bitcoins by satisfying the rules the previous ```scriptPubKey``` has set.

In standard transactions, the ```scriptPubKey``` in an output will be:

```
OP_DUP OP_HASH160 &lt;pubkeyhash&gt; OP_EQUALVERIFY OP_CHECKSIG
```

```javascript
var recipientScript = new bitcoin.Script()
var toAddressObj = new bitcoin.Address(toAddress, addressVersion)

recipientScript.writeOp(bitcoin.Opcode.map.OP_DUP)
recipientScript.writeOp(bitcoin.Opcode.map.OP_HASH160)
recipientScript.writeBytes(toAddressObj.hash)
recipientScript.writeOp(bitcoin.Opcode.map.OP_EQUALVERIFY)
recipientScript.writeOp(bitcoin.Opcode.map.OP_CHECKSIG)
```


This basically means, he who can provide the publickey and valid signature for ```<pubkeyhash>``` may unlock the Bitcoins specified.

If a person actually has those details, they will put in it the ```scriptSig```
```bash
&lt;signature&gt; &lt;pubkey&gt;
```

```javascript
var inputScript = new bitcoin.Script()
inputScript.writeBytes(signature)
inputScript.writeBytes(ecKeyPub)

input.script = inputScript
```

There are many possibilities in what this scripting language offers (e.g. Multi-signature transactions) but this will be explored in another tutorial.

How this expression is evaluated is also beyond the scope of this tutorial. You may wish to read the [Bitcoin Wiki on Script](https://en.bitcoin.it/wiki/Script) to get a better sense of how this works.

<br>
### Signing
<br>

To unlock Bitcoins specified, we must sign the transaction a private key that corresponds to the ```pubkeyhash```.

We generally sign all the transaction's data so that it cannot be tampered with.

e.g. This will prevent attackers from substituting their addresses in place of our recipient's, and steal all the Bitcoins.

Signing Bitcoin transactions can be a difficult and error-prone process.

We need to double hash it (SHA256) the entire transaction, and sign the hash with our private key.

Then, we append the HASHTYPE to the end of the signature. For standard transactions, this is ```SIGHASH_ALL ``` represented by 0x01

```javascript
var connectedScript = bitcoin.Script.fromHex(unspents[index].scriptPubKey)
var txSigHash = tx.hashTransactionForSignature(connectedScript, index, sigHashAll)
var signature = ecKey.sign(txSigHash).concat([sigHashAll])
```

This is what the final signature will look like on the byte map.

<br>
<table class='table table-condensed table-bordered'>
  <thead>
    <tr>
      <th colspan='2' colspan="2">Field</th>
      <th>Bytes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan='2'>PUSHDATA 47</td>
      <td>47</td>
    </tr>
    <tr>
      <td rowspan="8">Signature (DER)</td>
      <td>Sequence</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Total Length</td>
      <td>44</td>
    </tr>
    <tr>
      <td>Integer</td>
      <td>02</td>
    </tr>
    <tr>
      <td>
        Length
      </td>
      <td>20</td>
    </tr>
    <tr>
      <td>X</td>
      <td>37 2b e6 17 d9 d2 76 34 08 46 26 5d dc 7b a9 da bb e7 8e 97 fa c9 70 91 f7 e2 cb 19 ec 29 29 ae</td>
    </tr>
    <tr>
      <td>Integer</td>
      <td>02</td>
    </tr>
    <tr>
      <td>Length</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Y</td>
      <td>3b e1 5a 0a 39 29 b2 35 3e bb 81 f5 d6 7b 20 ab 3b 1e 42 7f 12 48 55 a2 30 96 49 85 8e aa 4b 34</td>
    </tr>
    <tr>
      <td colspan='2'>SIGHASH_ALL</td>
      <td>01</td>
    </tr>
    <tr>
      <td colspan='2'>PUSHDATA 41</td>
      <td>41</td>
    </tr>
    <tr>
      <td rowspan="3">Public Key</td>
      <td>Type</td>
      <td>04</td>
    </tr>
    <tr>
      <td>X</td>
      <td>0c fa 3d fb 35 7b df f3 7c 87 48 c7 77 1e 17 34 53 da 5d 7c aa 32 97 2a b2 f5 c8 88 ff f5 bb ae</td>
      <td>
    </tr>
    <tr>
      <td>Y</td>
      <td>b5 fc 81 2b 47 3b f8 08 20 69 30 fa de 81 ef 4e 37 3e 60 03 98 86 b5 10 22 ce 68 90 2d 96 ef 70</td>
    </tr>
  </tbody>
</table>


There are different hash types which result in different ways of how the bitcoin protocol checks the signature. These will be covered in a different tutorial.

<br>
### Add all inputs/outputs
<br>

The constructed inputs and outputs, with all necessary scripts must be added to the transaction object.

```javascript
// INPUTS
var input = new bitcoin.TransactionIn({
  sequence: [255, 255, 255, 255],
  outpoint: {
    hash: unspent.txHash,
    index: unspent.index
  }
})

tx.ins.push(input)


// OUTPUTS
var recipientOutput = new bitcoin.TransactionOut({
  value: txTargetValue,
  script: recipientScript
})

tx.outs.push(recipientOutput)
```

<br>
### Serialize/propagate
<br>

We're almost done. Now we must serialize the transaction, converting into its hexadecimal format. This is it input type for most APIs, command line tools.

For convenience we will propagate using the HelloBlock API.

You may also wish to [decode](https://helloblock.io/propagate) the transaction before we propagate it to make sure everything looks correct.

```javascript
var rawTxHex = tx.serializeHex()

helloblock.transactions.propagate(rawTxHex, function(err, response, resource) {
  if (err) throw new Error(err)

  console.log('https://test.helloblock.io/transactions/' + resource.txHash)
})
```

And now we're done!

<br>

# Further Resources
<br>
 - http://bitcoinhistory.net/Technical_Papers/ProgrammingBitcoinTransactionScripts.pdf
 - http://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.html

<br>
<br>
