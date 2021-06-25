---
layout: article
title: "Research Lab"
date:   2021-06-25 01:15:10 +0200
author: Johns Beharry
author_url: https://twitter.com/johnsBeharry
tags: [Research, Design, Bitcoin]
---

We take opaque primitives already available in bitcoin and lightning like the protocol itself, and the specs then packaging them in an intuitive way to make them more accessible for non-technical end-users.

The ultimate goal is to have bitcoin user experiences that feel familiar to a mainstream audience, even though complex things are happening in the background. 

The main challenge with this research is to find strategies that uphold principles of privacy and self-sovereignty. As many of the current design patterns people may be familiar with are achieved due to centralized services and architectures available to application developers.

### Design & Research Principals
- Privacy by default, and for everyone.
- Familiarity
- Empathy
- Truthfulness, designs that are truthful to bitcoin.

---

### Bitcoin Design Abstractions
#### Contacts
More privacy weary coin selection, channel openings, and payment requests using contacts as a foundation.

- [Web Prototype](https://bitcoin-contacts.netlify.app)
- [Docs](https://hackmd.io/@peakshift/B1wKSgqiO/edit)

#### Wallet to Wallet Communication
- [Docs / Social Payjoins](https://hackmd.io/@BitcoinDesign/SJHBGFkru)
- [Onion 78' (MIT Hackathon Winner) - Presentation](https://docs.google.com/presentation/u/1/d/1RWXk9A7V519o5C2rNhvrHW63b7Iz_Y7oVtujYxDTicI/edit#slide=id.gce634cc104_0_70)

#### [Other Abstractions](https://docs.google.com/presentation/d/1qIhzGTTFxwRZlvu33Fuwkv70YtJoj-tMHNmS_dt1n6M/edit?usp=sharing)

---

### Workshops
#### WabiSabi: Design Sprints for Coinjoins and Privacy
We explore onchain payments and privacy through the lense of WabiSabi a coinjoin protocol in Design Sprint inspired sessions every week.

- [Workshop Writeup](https://github.com/peakshift/bitcoin-ux/blob/master/coinjoins/design-sprints.md)

#### utxo.tools

Online web tool to simulate bitcoin transactions (including advanced features such as coin control) to be used in workshops.

- [Design File](https://www.figma.com/file/k50JDqDG5qG73NI3ELcscA/UTXO.tools)
- [Proof of Concept](https://utxo.tools)

---

#### Bitcoin Design Mentorship / Payments / Rwandan Wallet
Workshops to explore designing a mobile payments wallet for low connectivity regions while educating designers about how the underlying technology works.

Topics covered; Wallet UI Components, Contacts, Labelling, Coin Selection

- [Mentorship Information Page](https://hackmd.io/@BitcoinDesign/ByxhqPccP)
- [Workshop Design File](https://www.figma.com/file/0pgxMzs3IriAp73BTJFjgk/Case-Study-Rwandan-BTC-Wallet)

#### Coin Selection Workshop / Presentations

"Coins of Bitcoin", understanding UTXO management within bitcoin wallets and how to optimise for speed, cost, or privacy. Designed to be an introduction to the Coin selection/Transactions workshop.

- [Coins of Bitcoin](https://www.figma.com/file/XUJH1IENYxgzDC1ob8EW08/Coins-of-Bitcoin)

---

### Collaborations
#### Chaincase & Wasabi

Coin Selection and transaction privacy collaboration

- [Designs](https://www.figma.com/file/AFbCsLMlw3ZzkpHsiIIy2h/Chaincase)

#### OpenSats

Collaboration on OpenSats design. Research into platforms + concepts for landing page, grants, bounties, and donations.

- [Redesign](https://www.figma.com/file/r7iu1Ph8qz5zGmtcbz4LlQ/_OpenSats)

#### Zeus
- [Landing Page Design](https://www.figma.com/file/TqAM4LvuqvY7FBzFoaezJC/Zeus?node-id=702%3A0)

---

### Design Explorations
#### Tetris Wallet

Fun visualisation of UTXOs in bitcoin wallets.

- [Design Exploration](https://www.figma.com/file/fxB3JDnJxKIHR0moSJt5uu/Tetris-Wallet)

#### Bitcoin Gift Card

Designs for a printable Giftcard wallet for friends, family and loved ones.

- [Design Exploration](https://www.figma.com/file/fvXksk0Ipc7O2dO2YAOd4Z/Gift-of-Bitcoin)

#### Hide sensitive information
- [Bitcoin Design Guide / Onboarding / Protecting a wallet](https://bitcoin.design/guide/onboarding/protecting-a-wallet/#hiding-sensitive-information)

#### Signing messages
- [Verifying your identity, proving payments](https://github.com/Tiana01/bitcoin-ux/blob/3a28c5c860cc8ff5480be3fe778355d07f21709a/security/Wallet%20Security.md#signing-messages---verifying-your-identity-proving-ownership-of-fund)

#### Account scanning
###### Problem
Bitcoin wallets usually scan 20 addresses by default, hence if no transaction is found on the first 20 addresses, the wallet will assume that you have no previous transactions on that account. This means that if a user has transactions on the 21st address, the wallet will not display that transaction balance. The result of this is that the user will get a wrong balance.

###### Solution
Provide an interface after seed recovery step that makes the scanning process explicit so issues with the gap limit can be mitigated.

- [Wireframes & Docs](https://github.com/peakshift/bitcoin-ux/blob/master/payments/account-scanning.md)

---

### Application Layer

#### Wallet UI Kit
- [Dev Proposasl](https://hackmd.io/@BitcoinDesign/HJNK8edO_/edit)
- Tailwind React
- React Native

#### BOLT.FUN
Lightning Network Builder Docs - a fun place for builders to learn about and experiment with Lightning Network technology.

- [Website](https://bolt.fun)

#### Bitcoin & Lightning TestNet
- [Website](https://bolt.fun/testnet/)


### Otheer Research Documents

- [The Coins of Bitcoin](https://hackmd.io/ut_mjAvzQUWfeJ6YGXELWQ)
- [Contacts, Labelling, and Coin Control](https://hackmd.io/mrnylJgTQUyY0JghKQV0jQ)
- [UTXOs 1.1](https://hackmd.io/apD3laG_QKuRsWpU4t86mg)
- [UTXOs 1.2](https://hackmd.io/GpUSX0IMQly9b4-oDpVK6Q)
- [Coin Selection (1.1)](https://https://hackmd.io/7dsU1rg4SYCnvC3_uRHH9A)
- [Coin Selection 1.2](https://hackmd.io/dFStxMqdQe2ufIIwfGTz6A)
- [Coinjoin / Clusters & Anonset](https://hackmd.io/@BitcoinDesign/HJNK8edO_/edit)
- [...](https://hackmd.io/@BitcoinDesign/rym2ehCSd)