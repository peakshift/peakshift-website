---
layout: article
title: "Passwordless Authentication: Part 1"
date:   2022-06-03
author: Edward Pratt
author_url: https://twitter.com/barefoot_88
tags: [Authentication, Privacy, Security]
---

### TLDR;
Passwordless authentication services are a well integrated UX in Web 2.0s ecosystem. These services present different usability, security, and privacy trade-offs for end users. Authentication with Bitcoin (Lightning) could offer an easy to use, secure, and private service for users interacting with Web 3.0 applications.

### Introduction

Most applications built on top of Web 2.0 utilise a form of account authentication. Authentication is the process of verifying identity through the form of account creation, a user action often labelled as Sign Up or Sign In.

Passwordless authentication, a UX pattern that has grown in popularity over the past decade, is an authentication method in which *“a user can log in to a computer system without entering (and having to remember) a password or any other knowledge-based secret. In most common implementations, users are asked to enter their public identifier (username, phone number, email address etc.) and then complete the authentication process by providing a secure proof of identity through a registered device or token.”*

In this two-part article, we will first look at the evolution and rise in popularity of passwordless authentication as a user experience (UX) pattern in web and mobile applications, weighing up the benefits and costs of UX, privacy, and security. Later on, in Part 2, we will dive into the potential Bitcoin’s Lightning Network offers as an alternative authentication method in Web 3.0 apps and services.


## A brief UX history of authentication

Many anthropologists and sociologists would agree that human relations are built and rely on trust. The history of authentication most likely goes back to the beginning of human relationships between individuals, families, or tribes. In daylight, friends or tribe members could authenticate their identities through facial or pattern recognition (tattoos, markings, outfits, or armour). At night, when sight is no longer available, sounds, watchwords, or secret passphrases would be used as a form of trusted authentication (speak friend and enter 🧙‍♂️).

<figure class=" exdent active">
   <img class="fill" src="https://i.imgur.com/RzpGeFt.png">
</figure>

Fast forward a few millennia to 1989, Tim Berners-Lee births his brainchild - the World Wide Web. Since then, we have witnessed the rise and fall of many web applications and services that offer online surfers the ability to personalise their experience through account creation and authentication.

An account is a common term for an online “identity” tied to a particular website, application, or service. Accounts often provide users accessibility, whilst at the same time allowing them to become uniquely identifiable to service providers, plus inside, or sometimes even outside, users.

When creating an online account, users will usually be asked to provide both:

1. Public information that distinguishes them from others and allows them to be identifiable to a service or users. Think email, username, @handles, etc.
2. Private information that helps to authenticate (verify, secure, or prove) their ownership of this identity. Think passwords, biometrics, USD or SSH keys, back-up phrases or questions, etc.

### The evolution of authentication UX

A decade ago, authentication experiences would often come in the format of a user inputting their email, password, and other private information that was required by a website, application, or service. Today, we often see users opt for a faster, easier approach which involves less thinking, clicking, and hassle - 3rd party (sometimes referred to as "passwordless") authentication.

<figure class=" exdent active">
   <img class="fill" src="https://i.imgur.com/T8dUyms.png">
</figure>

Most Web 2.0 applications will now offer users the ability to authenticate an account (Sign Up for first-time users, Sign In for second timers) using a 3rd party service such as Google, Facebook, Apple, Twitter, Microsoft, etc. Even today, it doesn’t seem so farfetched that websites or applications actively push this form of authentication within their designs as a preferred user journey. This is demonstrated by Sign Up forms that prioritise these services within the UI’s visual hierarchy.

<figure class=" exdent active">
   <img class="fill" src="https://i.imgur.com/VhJc8YC.png">
</figure>

## Why do users opt for 3rd party authentication services?
Authentication using a 3rd party service such as Google provides benefits to users, such as:

**Less effort:** Let’s be honest, most users are indifferent and will opt for the path of least resistance. If a user is given a choice between typing in a username, email, and password vs clicking a few times whilst being led through a journey using modals, the outcome won’t be trivial.

**One less password to remember:** Passwords are a security relic of the past. Too often users provide weak, sometimes guessable passwords, including classics such as (111111, password, qwerty123, etc). Users do this to decrease cognitive load and to make remembering passwords easier. This also leads to passwords often being repeated across multiple platforms. One simple data breach on a platform or service on the web can unearth a multitude of privacy and security implications for another service elsewhere. Sign In with Google or Facebook requires only one password, which is still arguably a security flaw, however at least it’s a convenient trade-off and can encourage one strong password vs multiple weak (and all-to-similar) passwords.

**Keychain services are becoming increasingly popular:** Apple Keychain, Google Passwords, 1Password and other services are becoming regularly used as users wish to store their passwords in the cloud. What's more, these 3rd party services often introduce a best practice of creating a new strong password (usually a 12-24 letter scrambled key) for each new website or service. This is a step in the right direction for security, as users avoid repeating weak passwords across many sites.

**Trust:** I think it’s worth touching on the importance of trust with features such as online authentication. Each time they use them, users demonstrate trust in 3rd party services that are offered in Sign Up pages. Google has been around for decades, so as a user I can be sure that as a service it won’t be going anywhere soon. This allows me to feel confident in using it to create an account elsewhere. That being said, there are some services that have abused the trust given by users when it comes to the privacy of their data, so always err on the side of caution if you are unsure...


### Are these services more or less privacy preserving?
Whether we use a 3rd party authentication service (e.g. Google) or not, we often end up registering an online account using the same emails or usernames, and often the same passwords across multiple web and mobile apps. If you’re an iOS user, when looking over your security recommendations, you’ll see that this information is frequently leaked in data breaches (https://myshadow.org/tracking-data-traces). Companies and hackers amalgamate this data and link it to your identity, location, financial, and other personal information, creating an online profile of you using information that you might not have realised was public. 

In addition, we often unknowingly permit 3rd party authentication services to provide websites and applications additional information such as photos, names, dates of birth, addresses, and more when creating an account. Whilst these services may provide a simpler UX with a few less clicks, we advise you to always be aware of what information and permissions you give out, and to implement privacy preserving practises where possible.

## Let’s look at some popular authentication journeys
### Sign in/up with Email + Password
We’ve already discussed some of the obvious downsides to this method, however it is still a popular user journey and worth mentioning. Users type in their email address and password, as well as any other required information by the website or application. No surprises that it requires more mouse and keyboard clicks, as well as the repetitious privacy degrading use of the same emails and passwords across multiple sites. Of course, this method doesn’t always have to degrade privacy, but because of its cumbersome UX, users rarely create new credentials for every website or application.

**User journey:** Clicks Sign Up > Enters email address > Enters (+sometimes repeats) password > Enters any other required information > Clicks Create Account > Confirms account with magic email link

**Privacy:** (Usually) Weak

### Sign in/up with Google
Below, you can see a user’s journey of signing into or up for a service using Google. Total clicks? 4. Total time? 10 seconds. When we break this down, it’s kind of obvious why users opt for this journey when it comes to speed alone.

**User journey:** Clicks Sign Up > Clicks Sign Up with Google > Selects Google Account > Clicks to Confirm Privacy Policy

**Privacy:** Ok

<figure class=" exdent active">
   <img class="fill" src="https://i.imgur.com/BiE8zcJ.gif">
</figure>

### Sign in/up with Apple
iOS users also can create accounts for web and mobile applications using their Apple ID. Apple tries to protect user privacy from 3rd party applications by providing the bare minimum (email and password) in order to create an account on a user’s behalf. In addition, they provide users with the option of sharing or hiding their email address in applications. If shared, apps or websites can identify users by email. If hidden, however, Apple generates a random email address to provide the application or website, then the new address forwards relevant emails and information on to your Apple ID email address for increased privacy. As you can see in the example below, this option is pre-selected for users and therefore actively encouraged as a privacy best practise. Nice job, Steve.

**User journey:** Clicks Sign Up > Clicks Sign Up with Apple > Reviews Privacy Policy > Selects Email Preference (Share/Hide) > Clicks Continue > Enters Apple ID Password (or PIN/biometrics on mobile)

**Privacy:** Good

**Mobile view**
<figure class=" exdent active">
   <img class="fill" src="https://i.imgur.com/XREekUp.jpg">
</figure>

**Web view**
<figure class=" exdent active">
   <img class="fill" src="https://i.imgur.com/9rOB9yr.jpg">
</figure>

## Light(n)ing the way of online authentication ⚡️
As we’ve seen, passwordless authentication services are quickly becoming the most common way for users to login to an application or website. These services are fast, easy to use, and require minimal effort from the end user. However, as we approach the dawn of Web 3.0 (a web layer built on decentralised applications and services), both privacy and self-custodianship are becoming increasingly important to users as they interact with a multitude of applications and web services alike.

Over the past decade, cryptography has made a comeback. Most notably, Bitcoin has realised its potential as an online, decentralised, distributed, trust-less, and censorship resistant payment layer over the web. However, the buck (or more accurately, “bit”) shouldn’t stop at payments. Data storage, messaging, and authentication services are also becoming increasingly popular use cases for cryptographic networks like Bitcoin.

In Part 2 of this article, we’ll explore the potential that Bitcoin & Lightning can offer for improving online “passwordless” authentication, evaluating both the upsides and downsides of usability, privacy, and security. We will also visualise some designs and potential UX patterns for Lightning authentication on web, positioning it as a low-hanging fruit for non-technical folks to adopt and interact with lightning, whilst realising its potential in this new frontier of web applications.