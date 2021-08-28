---
layout: page
title: "Use Cases: Contacts based coin selection"
date:   2021-08-26 07:39:00 +0200
author: Johns Beharry
author_url: https://twitter.com/johnsBeharry
tags: [bitcoin design abstractions]
---

## Wasabi & Chaincase

Wasabi Wallet (desktop) and Chaincase (iOS) are applications that allow you to gain better fungibility of your bitcoin by offering Coinjoin services.

A CoinJoin is a process where multiple participants provide at least one input to a transaction. Since both Wasabi and Chaincase offer the same Schnorr blind signatures based protocol there is usually an equal output denomination. This ... an anonimity set. Change gets returned to the participant's wallet if the amount they funded the transaction with is more than the minimum demonination.

TRACTION SO FAR
- Wasabi Wallet is quite mature over the past ... years since it's launched has provided fungiability to over ... BTC.
- Chaincase while still in development has ...

User error
- Post Mix Spending***
- Handling toxic change
- Anonimity set
- Rudementary coin controls
- User error, impropper labeling

WabiSabi
- Coinswaps
- Payments inside a CoinJoin

Introduce both projects, talk about:
- their stated goals
- their approach to doing this so far (maybe high-level implementation details)
- their traction so far (users, txns mixed, volume/revenue etc.)
- their current sticking point at this stage of their growth/progress


## Enter Peakshift

- funded by a Square Crypto Grant
- Payments chapter
- Understanding privacy implications is fundimental to 

Talk about:
- how you discovered they were having these problems
- how you all connected, and your collaborative interactions to identify the problem and think through potential solutions, talk about:
    - communication channels, the cadence of your comms etc.
    - your (design) process for identifying the problem, and for exploring solutions to the problem
    - DO NOT state the problem or solutions as yet; this section is about **process**


## The Problem

Here we can give some details on what emerged as the problem from the process described above:
- can speak to how the process above helped inform the problem identification
- can speak about the actual details of the problem from:
    - a 'why' perspective
    - a 'what' perspective (technical details)


## Potential Solutions

Here you can speak through:
- how you then ***used design*** to come up with a set of solutions that could potentially address the problem
- details about ***the what*** of the solution


## Collaborative Implementation

Here you can speak to:
- your process of communicating the solutions to the projects
- actions they've taken on their own since then against these solutions
- actions you all have taken collaboratively to test/implement solutions
- your iterative process of collecting feedback from either suggestions of theirs or observations from PoC implementations to improve the solution


## Outputs (Real & Expected)

- Where you expect the end of this research leads to in a tangible way from a _product_ perspective for these projects
- How you've documented the outcomes of this process for re-use (design guide?)
- How you expect these outcomes can be used by other projects now
   - Direct implementations
   - Foundation work to inform further research/problem-solving

A lot of these learnings have been put into the payments section, and the protecting wallets of the bitcoin design guide.

Designers will want to make bitcoin payment have more context, and new breed of bitcoin applications will need to be more intelegent, ... Challenge is reduce time to understand a transaction history.

If you are looking to ... these bitcoin contacts can be the foundation for you to build other functionalities on.

---

*Special thanks to Yuval Kogman who without this would not have been posssible. Also thanks to Max Hilibrand, Adam, David, Lucas of Wasabi Wallet, Dan Gould of Chaincase, and Andrew Calameri of BTC Pay Server for ... who were instrumental in the feedback and technical validation.