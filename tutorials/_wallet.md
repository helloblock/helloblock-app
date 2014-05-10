### Headlines
How to create a Bitcoin Wallet

How to create a Javascript Bitcoin Wallet

How to create a Blockchain.info-like Bitcoin Wallet

Build your own Bitcoin Wallet

### Resources
http://bitcoinhistory.net/Technical_Papers/ProgrammingBitcoinTransactionScripts.pdf
http://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.html
http://bitcoin.stackexchange.com/questions/3374/how-to-redeem-a-basic-tx

Signing
https://bitcoinarmory.com/developers/mit-project/


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
 - BIP38
 - Encrypt with password
 - random, chrome storage
 - p2sh
 - secret sharing (https://github.com/amper5and/secrets.js/)
 - HD Wallet
 - Cold storage
 - 2FA
 - Key generation vulnerabilities
 - Batch requests
 - /wallet


require 'bitcoinjs-lib', '0.2.0' here
require 'helloblock-js'

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
