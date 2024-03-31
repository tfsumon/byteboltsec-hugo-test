---
date: "2024-01-24"
title: "How to Find Data Breaches - How to Check if Your Data's Been Breached"
image: "images/blog/how-to-find-data-breaches.png"
description: "Discover how to find data breaches. Learn how to check whether your information has been leaked."
author: "Breachsense"
h1: "How to Find Data Breaches"
intro1: "Are you worried that your data might have been leaked in a data breach? Want to check it out but have no idea where to find information about data breaches?"
intro2: "Data can be leaked in [various ways](https://www.breachsense.com/blog/data-breach-types/), including phishing scams, malware, human error, and exploiting vulnerabilities within an application or server."
intro3: "But regardless of the way it happens, the fact remains - Millions of records and sensitive data, including credentials and internal company documents, are getting leaked every day."
intro4: "Staying on top of all of that data is challenging."
intro5: "Luckily, there are several services that can help you find where your data was leaked."
intro6: "Below, we're going to cover the top five services that will help you find out whether your data was compromised."
draft: false
---
## What types of data get breached or leaked

Chances are, if you’re reading this, you want to search for your company’s compromised data. 

To minimize the risk of missing important information, it’s essential to understand the different types of data that get leaked and which tools index which kinds of data.

When searching for breached company data, you need to search for:

- Leaked credentials
- Leaked session tokens
- Leaked company documents
- Data related to your vendors and customers that can be used to access your network

Before we jump into the actual tools, let me explain what I mean.

### Leaked credentials

One of the most exploitable types of leaked data is usernames and passwords.

According to the[ Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/2023/incident-classification-patterns-intro/web-application-attacks/), 86% of data breaches involve the use of stolen credentials.

Stolen credentials come from three primary sources: breached third-party applications, phishing attacks, and malware-infected devices. Having said that, nowadays, threat actors rarely rely on third-party breaches to gain initial access to their targets.

There are two reasons for this:

1. By the time the breach surfaces on the darknet, the victims have already been notified, and a significant portion have already updated their passwords.
2. In the past, many applications used weak hashing algorithms like MD5 and SHA1 to store their passwords. These were easy to crack. Modern applications use stronger hashing algorithms like Bcrypt or Argon2ID, which are significantly harder to convert to plaintext.

As a result, threat actors have moved away from relying on 3rd party breaches to relying on stealer (or infostealer) logs to gain access to their targets.

Stealer logs are created from a virus installed on a computer. While most victims run Windows, there are many Android-infected devices as well.

Devices get infected after the victim is tricked into installing a program from a malicious website or simply installing pirated software that contains the virus.

The virus then creates a log of any valuable data it finds on the device. 

Due to how the malware operates, it can collect, among other things, the usernames and passwords sent from the device before they're encrypted.

The logs are then transferred from the infected device and distributed or sold on the dark web.

In other words, even if you follow best practices and have a password manager generate a strong password, malicious users can still access your plaintext password if your device is infected with malware.

In addition, malicious users often combine third-party breached data with stealer logs to create combo lists. These lists are used for [credential stuffing attacks](https://www.breachsense.com/blog/credential-stuffing-attack/), which allow attackers to gain access to victims' accounts on other systems via an automated attack.

### Leaked session tokens

One of the most overlooked pieces of leaked data is session tokens. 

As passwordless authentication becomes more mainstream, threat actors will stop using leaked credentials and start using leaked session tokens to bypass two-factor authentication and gain access to their targets.

Previously, we discussed stealer logs collecting credentials in plaintext. In addition to that, they also collect session cookies.

This is important because an attacker can bypass both the login requirement and the MFA stage of authentication if they have a valid session token.

This type of attack is gaining traction, especially[ on](https://www.youtube.com/watch?v=yGXaAWbzl5A)[ YouTube](https://blog.google/threat-analysis-group/phishing-campaign-targets-youtube-creators-cookie-theft-malware/).

### Leaked company documents

Company documents can encompass a wide range of sensitive information ranging from internal communications and financial records to strategic plans and intellectual property. 

This type of data is often leaked due to a mix of [human error](https://www.breachsense.com/blog/data-breach-human-error/), inadequate security practices, and deliberate malicious activities.

Some of the main ways this happens include

- Lost or stolen devices
- Poorly managed cloud services
- Unsecured networks
- Insider threats
- Human error
- Malware and ransomware

### Data related to your vendors and customers 

To make matters worse, the ransomware and malware example can be completely out of our control.

Despite having an otherwise secure network, we often have considerable risk due to 3rd parties who store our data.

In some cases, service providers may have access to our network to enable them to provide services. If one of their employees gets infected with stealer malware, the attackers could exploit those credentials to access our network.

In other cases, an upstream service provider may get hit with ransomware. However, as part of their attack our data gets leaked too.

That's why it's critical for security teams to have visibility into not only their own leaked data but vendors' and customers' data that could be used to exploit them as well.

## Tools to find breached data

Now that we've discussed the types of data we need visibility into, here's a list of services that can help you find your breached data.

### 1. Breachsense

[Breachsense](https://www.breachsense.com/) (disclaimer - this is our tool) is an enterprise-level [data breach monitoring platform](https://www.breachsense.com/data-breach-monitoring/). The service indexes breached data from stealer logs, 3rd party breaches, combo lists,[ telegram channels](https://www.breachsense.com/telegram-channels/),[ ransomware gangs](https://www.breachsense.com/ransomware-gangs/),[ darknet markets](https://www.breachsense.com/darknet-markets/), and more.

The service is completely API-driven, making integrating with any SIEM or SOC simple.

Breachsense gives security teams visibility into not only their own leaked data but vendors' and customers' data as well.

The APIs allow you to pivot on multiple data points to drill down into your target. For example, you can:

- Query on username, email address, domain name, IP address, and even hardware ID
- Query a password to see other usernames and applications where the same password is used
- Verify the actual risk associated with a leak by receiving plaintext passwords in the response
- Pivot to find other usernames or passwords used by the target in incident response investigations
- Enumerate leaked session tokens to terminate them before they're used to bypass authentication
- Monitor assets to receive real-time alerts whenever they appear in newly indexed data
- Find internal company documents leaked in a 3rd party vendor's ransomware attack
- Receive alerts when a threat actor announces their intention to attack a target before the attack

![Breachsense data breach detection API results](../JSON.png)

### 2. Have I Been Pwned

Have I Been Pwned allows users to check whether their personal data has been compromised in 3rd party breaches and pastes.

The service allows you to search via email address or phone number and returns the number of breaches in which the search query appears, along with the name of the data breach.

Users can also sign up to receive notifications if their personal email address appears in future dumps.

![Have I Been Pwned search results showing that a particular email address has been found in a data breach.](../HIBP.png)

### 3. Dehashed

Dehashed is a 3rd party breach database that allows both individuals as well as companies to search for their breached credentials.

The service is available via a web front-end as well as an API.

The server responses include the plaintext password only when the original breach contained a plaintext password.

The search functionality supports wildcards, regexes, reverse passwords, as well as search operators.

Users can monitor email addresses, phone numbers, and usernames and receive alerts when they appear in 3rd party breaches.

![Dehashed 3rd party breach search results for data breaches.](../Dehashed.png)

### 4. Intelligence X

IntelX allows you to search domain names, URLs, IPs, CIDR, bitcoin addresses, IPFS hashes, and more. 

The data comes from the darknet, paste sites, whois data, as well as 3rd party data leaks.

IntelX keeps a historical archive of the results as well. This ensures access even if the original leak is removed from the internet.

![IntelX search results](../Intelx.png)

### 5. PSBDMP

PSBDMP or "Pastebin Dump" is a search engine designed to find information that has been posted to public paste sites like Pastebin.

Programmers often use Pastebin sites to share code snippets, but they can also be used to share other types of information, including leaked data.

The service allows investigators to search for sensitive data that might have been posted as well as aid in incident response by quickly finding if any company data has been exposed.

![PSBDMP paste search and data leaks monitor.](../Psbdmp.png)

## Conclusion

In today's digital landscape, the threat of data breaches is more prevalent than ever.

Monitoring the dark web for sensitive data associated with your organization is crucial to mitigate the risk before cybercriminals exploit the leaked data.

Security teams need a comprehensive solution that gives them visibility into their leaked data, third-party risks, and emerging threats.

This data not only empowers you to proactively defend against potential breaches but also equips you with the tools needed for effective incident response.

Remember, in the digital age, knowledge is not just power – it's protection.
