---
layout: page
title: "Transaction Builder"
date:   2021-09-23 09:15:00 +0200
author: Johns Beharry
author_url: https://twitter.com/johnsBeharry
tags: [bitcoin design abstractions]
---

> How might we faciliate transactions to be utilised in a more efficient manner?

We will be exploring ways to make the transaction structure more understandable.

---

What will the next generation of wallets allow users to do?

- Choosing their own spending conditions (ala miniscripts, taproot policies)
- Payjoins (await peer to be online)
- Batched Payments
- Transaction Portability (PSBT)
- Subscriptions

## Funding Source
Instead of refering to inputs of a transaction — we say a transaction needs to be funded. A funding source may be a specific lightning payment channel, lightning node (in the case of a multi-wallet application), or UTXO.

## Operations
...

## Pending Operations
A transaction builder can have timed operations, as well as the ability to batch operations. The pending operations can have 
