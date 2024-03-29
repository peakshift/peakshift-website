---
layout: page
title: "Bitcoin UX Abstractions"
summary: A way to talk about bitcoin design
date:   2021-08-26 07:39:00 +0200
author: Johns Beharry
author_url: https://twitter.com/johnsBeharry
tags: [bitcoin design abstractions]
---
> A **design language** or **design vocabulary** is an overarching scheme or style that guides the design of a complement of products or architectural settings.[^4]

## Why does bitcoin need a design language?
The product development process, wether open source or in a cooporation requires multiple parties to interact and collaborate. While very open, bitcoin's technology has many parts that are inaccessible, or unknown to people who create experiences ontop of it. The language that is currently used is quite technical, and the usefulness of the functionalities often get lost in translation between the writers of the spec and those with lesser technical knowledge of bitcoin.

## Guidelines not strict rules.
When designing experiences, abstractions form when functionalities are given the most minimal interaction points in an interface. This is great for the end person using the application, but in bitcoin its almost critical for designers to have a slightly deeper understanding of the technology and its constrints than in the more mature fiat fintech world.

The goal of this project is to  equip designers with famillair fintech ux patterns that they may want to implement in their designs, while helping them understand the lower level technology that make up each of the abstractions.

This collection of abstractions form a language, that hopefully enables easier dialog between varyingly skilled contributors/teams/departments.

## Specifications
### [Contacts](/abstractions/contacts)
> How might we easier store and reference payment destinations for the various entities and individuals we transact with?

### [Payment Requests](/abstractions/payment-requests)
> How might we most efficiently request payments and communicate our wallets capabilities with the sender?

### [Wallet Messaging](/abstractions/wallet-messaging)
> How do we enable bitcoin applications to communicate to each other, while safeguarding privacy?

### [Transaction Builder](/abstractions/transaction-builder)
> How might we faciliate transactions to be utilised in a more efficient manner?
