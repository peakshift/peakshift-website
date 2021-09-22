---
layout: page
title: "Payment Requests"
date:   2021-08-26 07:39:00 +0200
author: Johns Beharry
author_url: https://twitter.com/johnsBeharry
tags: [bitcoin design abstractions]
---

We ultimately want to provide the least friction in the payment process, and having two networks, multiple address, invoice and payment request formats does make this challenge more difficult as the transacting parties may be random, and their preferences may not algin with the senders wallet capabilities or available funds on either of those networks.

It is not just the payment amount and desintation that needs to be communicated by the recevier, but the both transacting parties also need to negoitate their preferences and wallet capabilities.

### What is a bitcoin payment request?
Bitcoin Payment Requests are single payment string that can also be presened as a unified QR Code for scanning or transmited via [Wallet Messaging](). 

Payment Requests can either be:
1. BOLT11 Invoice w/ onchain fallback address
2. BIP21 w/ BOLT11 Encoded 

## Receiver
The receiver can have their preferences, but no-one can guarantee compatibly.

## Sender
Having this unified payment request allows the sender to have a fallback mechanism in the event of an error that could occur on Lightning or if they are not able to meet the preferences of the receiver due to lack of funds.

## Privacy

### Labeling
With regards to the privacy implications of sharing an address which may not be used but is now known by the sender: a solution that I like to promote is mandatory labelling of the "payment request" which would:

1. Provide additional meta data to the receiver about the incoming payment
2. Be a means for the application to know which addresses to skip over when generating new payment requests.

### Multiple ways to communicate a payment destination
The different address and payment request formats
- BIP21
- Lightning BOLT 11
- Raw address: Segwit addresses
- Raw address: Native Segwit
- Raw address: Public key
- Raw address: Legacy address
