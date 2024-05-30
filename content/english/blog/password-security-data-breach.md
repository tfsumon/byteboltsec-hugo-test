---
date: "2024-02-15"
title: "Poor Password Management: How to Create Breach-Resistant Passwords"
image: "images/blog/password-security-data-breach.png"
description: "Discover the causes and risks of poor password managment. Learn how to boost password security and create breach-resistant passwords." 
author: "Breachsense"
tags: ["Authentication", "Data Breach"]
h1: "Overcome Poor Password Management: How to Create Breach Resistant Passwords"
intro1: "FACT: There is no [more common](https://www.verizon.com/business/resources/reports/dbir/2023/incident-classification-patterns-intro/web-application-attacks/) way to breach a company’s systems than by using compromised passwords."
intro2: "But what’s even worse is that, in some cases, we make that task even simpler for hackers. Often, they just need to guess our ridiculously weak passwords, and that, as studies confirm, is [not as difficult as it may seem](https://www.cnbc.com/2023/11/16/most-common-passwords-70percent-can-be-cracked-in-less-than-a-second.html)." 
intro3: "**The result?** Well, as the Verizon 2023 Data Breach Investigation Report states, 86% of data breaches happen as a result of poor password management." 
intro4: "In this article, we discuss the reasons behind those breaches and offer you some actionable tips to improve password security and develop breach-resistant password practices." 
intro5: "But first, let’s reiterate this…"
draft: false
---
## Poor Password Management is a Leading Cause of Data Breaches

Naturally, the issue isn’t just that we don’t protect our passwords. In fact, several factors contribute to this alarming situation. 

Here are the most common ones:

### Weak passwords

Employees often create passwords that are too simple. Passwords such as “123456” or “password” still top almost every list of the most commonly used password combinations. 

![Examples of weak passwords](../CommonPass23.png)

([image source](https://www.cnbc.com/2023/11/16/most-common-passwords-70percent-can-be-cracked-in-less-than-a-second.html))

Unfortunately, weak passwords like these can be easily brute-forced, providing hackers with unauthorized access to your company’s sensitive information.

### Password reuse

On average, people reuse the same password across four different online accounts. When an attacker gains control of an account on one app, they often test the same login credentials on other apps to check where else they work. This type of attack is called [credential stuffing](https://www.breachsense.com/blog/credential-stuffing-attack/). Password reuse makes the effects of a breached account significantly worse by creating a domino effect of compromised data across multiple apps.

### Inadequate storage

Inadequately storing passwords is another issue often caused by either negligence or a lack of understanding of data security. Quite often, employees store their passwords in unsecured locations - plaintext documents, hardcoded in scripts, in their browser's built-in password manager, and so on. What’s more, they often leave them on the desktop, clearly marked with a label like “passwords.”

This could lead to [data breaches](https://www.breachsense.com/blog/what-is-a-data-breach/) in several ways. For one, these files are rarely encrypted. If the victim's device becomes encrypted with stealer malware, the attackers will have access to all of the files on the system, including the plaintext passwords. When passwords are physically written down, they may be easily accessible by coworkers and can be exploited as part of an [insider data breach](https://www.breachsense.com/blog/insider-threat-data-breach/). 

### Lack of employee training

Finally, employees may not be aware of best practices for password security, both in terms of password generation as well as password storage. That, in turn, could lead to an increased risk of data breaches.

## How Hackers Use Poor Password Security for Cybercrime

Now, let’s turn the tables and discuss how passwords get hacked or used in cyberattacks.

### Dictionary Attack

In this type of attack, hackers use specialized tools to try thousands or even millions of different passwords until they find the right one. 

It’s as if you went through the dictionary and tested every possible word there as a potential password, hence this strategy’s name. Now, of course, hackers go beyond just the words you can find in a dictionary. They usually begin by compiling a list of words that are likely to be used as passwords. And yes, this would also include words like “password,” “admin,” or “12345.”

Then, they input the list into the [brute-force software](https://www.breachsense.com/blog/credential-stuffing-password-spraying/), which tries each of those words as a potential password. 

This method often allows hackers to crack the most easily guessed and common passwords in a matter of seconds. 

### Brute Force Attack

A brute force attack works in a similar way to a dictionary attack. However, in the dictionary attack, hackers focus on single words that are commonly used as passwords. 

In the brute force attack, however, they extend it to combinations that include words, numbers, special characters, and symbols. 

Using tools like hashcat, attackers can easily create different variations of passwords to increase to chances of success. 

Once the password list has been compiled, they simply automate the authentication requests to check which ones are valid.

### Phishing Attack

A phishing attack is all about tricking a person into taking action that leads to their password, personal information, and other sensitive data being stolen. 

Usually, in a phishing attack, a person receives what looks like a genuine message that asks them to perform an action - usually to click on a link. 

Once done, they are either taken to a fake version of a trusted site and asked to provide various information, or hackers implant malware on their system. In either case, the person unknowingly provides the attackers with a means to access their usernames, passwords, and other sensitive data.

## 10 Ways to Improve Your Password Security Practices and Create Breach-Resistant Passwords

Here are some of the strategies that can help you mitigate the risk of data breaches caused by poor password management and security:

### 1. Implement strong password policies

First of all, enforce strict password policies across your organization. These should be undisputable rules that every employee follows when creating passwords. 
At a minimum, your password policies should define:

- the minimum length for each password
- the number of factors required to authenticate (e.g., MFA, FIDO, U2F tokens)
- the character types allowed (e.g., whitespace, emojis, Unicode)

### 2. Do NOT force users to update their passwords periodically
Forced password updates are no longer considered a best practice. Forcing periodic password updates encourages users to create similar passwords to their current ones, e.g., *Password1* becomes *Password2*, then *Password3*, and so on. These variations are trivial to guess with tools like hashcat.

### 3. Use a password manager

People are terrible at choosing strong passwords. Let alone the folks who keep all their passwords in a plaintext file on their desktop. Having a password manager create, store, and manage your passwords for you provides multiple layers of security. Beyond generating strong passwords, preventing password reuse and encrypting the password by default, a password manager will fill in your credentials for you on a given login screen. A byproduct of this is that your password manager won't autofill in your login credentials on a phishing page that looks identical to, say, your real online banking app.

### 4. Enable multifactor authentication (MFA)

Add an extra layer of security by enabling MFA wherever possible. 

Multi-factor authentication requires users to provide additional verification, such as a one-time token or hardware key in addition to their password. This greatly reduces the potential for hackers to breach your data, even if they have to your password. 

### 5. Use Passphrases
If, for some reason, you can't use a password manager to generate a password, consider using a phrase or combination of words as the passphrase instead.

### 6. Establish a secure password recovery process

Implement a secure password recovery process that verifies the user’s identity and prevents unauthorized access through social engineering or other means.

### 7. Monitor the dark web for traces of your company's leaked data

Continuous dark web monitoring enables your security team to locate company login credentials or data being leaked or sold on the dark web before they're exploited. Always [have a response plan](https://www.breachsense.com/blog/data-breach-response/) in place to address any incidents if and when they occur. 

This may require working with external security teams with the expertise to track and analyze the relevant threats. Having a pre-vetted list of partners who can step in on short notice is critical.

If you don't have the resources for continuous monitoring, use a [data breach monitoring platform](https://www.breachsense.com/data-breach-monitoring/) like [Breachsense](https://www.breachsense.com/why-breachsense/) to continuously monitor the dark web to verify that your data hasn’t been found in a [recent data breach](https://www.breachsense.com/breaches/). 

### 8. Encourage the use of an SSO (single sign-on) solution

Implementing an SSO solution allows employees to securely access multiple applications and services with a single set of credentials, reducing the chances of weak or reused passwords.

### 9. Limit access privileges

Assign access privileges on a need-to-know basis and regularly review user permissions to ensure that employees only have access to the necessary systems and data for their role.

### 10. Encrypt sensitive data

In addition to storing credentials in an encrypted password vault, enable full disk encryption on any device that stores sensitive data. Encrypting data at rest, helps prevent it getting exploited in the event of a breach.

## Conclusion

Poor password practices are a significant contributor to data breaches, posing a considerable risk to businesses and organizations.

By understanding the causes of these breaches and implementing best practices, organizations can significantly improve their security posture and reduce the risk of falling victim to a data breach.

Prioritizing password security is essential in protecting sensitive information and maintaining trust with clients and stakeholders.

Breachsense can help you protect your organization from data breaches - [book a demo today](https://www.breachsense.com/book-demo/).
