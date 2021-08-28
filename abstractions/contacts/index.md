---
layout: page
title: "Contacts"
date:   2021-08-26 07:39:00 +0200
author: Johns Beharry
author_url: https://twitter.com/johnsBeharry
tags: [bitcoin design abstractions]
---

An encrypted and locally stored contact list that maps Contacts details with bitcoin addresses/output descriptors or other address generators, peer-to-peer style endpoints for messaging another contact like a Tor hidden service url or node public key.

This abstraction is able to touch on a number of challenges encountered by application developers and end users.

- How might we easily coordinate multisig or establishing a ?
- How might we allow our users to share payment requests without laving the application?
- How mught we allow for the coordination of different processes while remaining interopable with the rest of the ecosystem?

## Storage
### **The Problem**

Contacts Lists are usually backed up to centralised servers giving 3rd-parties access to personal data. Bitcoin application developers implementing their own contact list and user registeries will end up falling into the same problem. 

A person’s contact information is sensitive (e.g. doxing with phone number via SIM porting, email hacking using password dumps etc.). Not ideal that your own security is in the hands of 10s/100s of people who may hold your contact info that you have absolutely no control over.

### **Desired**

Limiting a person’s contact info to just their local storage and encrypted cloud storage.

<button><a href="https://bitcoin-contacts.netlify.app" target="_blank">Demo</a></button>

REF
- https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2021-June/019151.html

### Use Cases
- [Coin selection](./coin-selection)