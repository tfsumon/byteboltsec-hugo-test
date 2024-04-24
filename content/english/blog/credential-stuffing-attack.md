---
date: "2024-03-31"
title: "What Is Credential Stuffing, Real World Examples and How to Prevent It"
image: "images/blog/credential-stuffing-attack.webp"
description: "Discover the best practices for preventing credential stuffing. Learn the mechanics of credential stuffing and the best practices for preventing the attack."
tags: ["credential stuffing", "prevention"]
author: "Breachsense"
h1: "What Is Credential Stuffing and How to Prevent It"
intro1: "The sad truth is that more than 343 billion credentials were leaked last year via malware alone."
intro2: "That's 343 billion credentials that attackers will try to login with on other applications to see where they work."
intro3: "Credential stuffing has become a serious threat to organizations due to how common password reuse is among employees."
intro4: "Credential stuffing leads to initial access which leads to a full-scale data breach."
intro5: "In this post, we'll cover the mechanics of credential stuffing, some real-world examples, as well as the most effective solutions to preventing these attacks."
draft: false
---
## What Is Credential Stuffing?

Credential stuffing is a type of cyberattack where attackers use automated tools to try to gain unauthorized access to user accounts on various websites. This is typically done by using large sets of stolen usernames and passwords (credentials) obtained from previous data breaches. The attackers assume that many people reuse their passwords across multiple sites, so they use these stolen credentials to attempt to log in to other websites.

## How Credential Stuffing Works

Here's how credential stuffing attacks typically work:

1. **Obtain Stolen Credentials:** Attackers acquire lists of usernames and passwords from previous data breaches, stealer logs, and combo lists. These lists are often traded or sold on dark web forums.
2. **Automated Attacks:** Using headless browsers, attackers attempt to log in to various websites with the stolen user credentials. This process is usually done with automated tools at a high speed and on a large scale, often using a botnet.
3. **Success and Exploitation:** If the login attempt is successful, the attacker gains unauthorized access to the user's account. They can then sell the access or exploit this for various malicious purposes. Attackers often exploit these accounts for identity theft, to steal corporate information, or to make fraudulent purchases.

## Credential Stuffing vs. Brute Force Attacks vs. Password Spraying

While credential stuffing, brute force attacks, and [password spraying](https://www.breachsense.com/blog/credential-stuffing-password-spraying/) are all types of cyber attacks aimed at gaining unauthorized access to user accounts, they differ in their methods and strategies:

### Credential Stuffing:

*  **Method:** Attackers use stolen usernames and passwords from previous data breaches to attempt to log in to other websites.
* **Assumption:** Many users reuse their passwords across multiple sites.
* **Characteristics:** This attack relies on large volumes of previously compromised credentials and often uses automated tools to try multiple combinations quickly.

### Brute Force Attacks:

*  **Method:** Attackers attempt to guess an account's password by trying every possible password combination or combination of characters until they find the correct one.
* **Assumption:** Given enough time and resources, any password can be cracked.
* **Characteristics:** This attack can be time-consuming and resource-intensive, especially for longer and more complex passwords. It's often mitigated by account lockout policies and CAPTCHAs.

### Password Spraying:

* **Method:** Attackers use a few common passwords (e.g., "password123", "admin", "123456") and try them on a large number of usernames to find matches.
* **Assumption:** In any large set of users, some will use common or weak passwords.
* **Characteristics:** This attack avoids account lockouts by trying only a few passwords on each account before moving on to the next account. It's a more targeted approach compared to brute force attacks.

## Real-world Examples of Credential Stuffing Attacks

Credential Stuffing attacks are very common, and even well-known brands have been exploited. Here are some real-world examples:

1. **Jason’s Deli (2023):** The [US restaurant chain](https://www.scmagazine.com/news/over-340000-jasons-deli-customers-potentially-impacted-in-credential-stuffing-attack) warned its online customers that their personal data had been exposed in a credential stuffing attack. More than 340,000 customers were affected, with compromised data including names, addresses, telephone numbers, birthdays, and truncated credit card numbers​.
2. **23andMe (2023):** A threat actor accessed approximately 14,000 [23andMe](https://blog.23andme.com/articles/addressing-data-security-concerns) user accounts using stolen login credentials from other sites. The attacker then collected personal data from millions of people, including genetic ancestry details, which were sold online.
3. **Dunkin' Donuts (2019):** [Dunkin\' Donuts](https://www.zdnet.com/article/dunkin-donuts-accounts-compromised-in-second-credential-stuffing-attack-in-three-months/) announced that 1,200 of their 10 million DD Perks rewards accounts were compromised due to credential stuffing attacks. The attackers used credentials from previous data breaches to gain access to the accounts, which contained personal information and rewards points.
4. **Disney+ (2019):** Shortly after the launch of the [Disney+](https://www.wired.com/story/disney-plus-hacks-credential-stuffing/) streaming service, customers faced disruptions as their account credentials were put up for sale on dark web forums. The attackers used stolen usernames and passwords to identify valid credentials on the Disney+ site.
5. **Superdrug (2018):** The [UK cosmetics retailer](https://www.theguardian.com/business/2018/aug/22/superdrug-targeted-by-hackers-who-claim-to-have-20000-customer-details) was contacted by hackers claiming to have account data for 20,000 customers. The preliminary investigation suggested that the credentials were acquired through credential stuffing rather than a data breach.
6. **Uber (2016):** An attacker gained access to [ Uber's ](https://fortune.com/2018/11/27/uber-eu-data-hack-fines/)data storage through credential stuffing, using an employee's previously exposed credentials to access their GitHub account and then the Amazon Web Service S3 buckets where Uber's data was stored. This breach affected 57 million users.
7. **HSBC (2018):** [HSBC](https://www.fastcompany.com/90264030/what-is-credential-stuffing-hsbc-data-breach-possibly-enabled-by-re-used-passwords) notified some of its customers of a data breach where attackers stole personal and account information. The breach, which affected less than one percent of the bank's 1.4 million customers in the US, was attributed to credential stuffing.
8. **Reddit (2019):** [Reddit](https://www.reddit.com/r/help/comments/aea649/recently_locked_out_of_your_account_help_is_on/) locked users out of their accounts after suspecting credential stuffing attacks. The security team noticed unusual activity from a large group of accounts and forced users to [reset their passwords](https://www.breachsense.com/blog/password-breach/) before restoring access​.

## Credential Stuffing Prevention

The following techniques can help prevent credential stuffing attacks. No single technique is a silver bullet, so combining them is highly recommended:

### Use A Password Manager

Mandate the use of a password manager to help employees generate, store, and manage unique, strong passwords for each of their accounts. This can simplify the process of maintaining unique passwords and reduce the likelihood of password reuse across multiple sites.

### Implement Multi-Factor Authentication (MFA)

MFA adds an extra layer of security by requiring users to provide additional verification beyond just a password, such as a code sent to their mobile device.

### Educate Users

Provide training and awareness programs to educate users about the risks of credential stuffing, the importance of using unique passwords, and the need to enable MFA.

### Monitor for Suspicious Activity

Keep an eye on failed login attempts and other unusual activity that may indicate a credential stuffing attack. Set up alerts to notify security teams of potential threats.

### Use CAPTCHAs

Implement CAPTCHAs on login pages to differentiate between human users and automated bots, making it more difficult for attackers to execute credential stuffing attacks.

### Rate Limiting

Implement rate limiting to restrict the number of login attempts allowed from a single IP address within a certain time frame, reducing the effectiveness of automated attacks.

### Employ Advanced Security Solutions

Consider using security solutions like bot detection and mitigation tools that can identify and block automated attacks.

### Monitor The Dark Web for Stolen Credentials

Regularly check for the presence of your organization's credentials on the dark web and take action if any are found.

## How Breachsense Can Help

According to the [Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/), 86% of data breaches involved the use of stolen credentials. They're the easiest way for malicious users to bypass detection and gain access to their target network.

Breachsense is a dark web monitoring solution that can alert you in real-time when your employees', customers', or third-party vendors' compromised accounts appear on the dark web. This enables your security team to mitigate the risk and reset the stolen credentials before hackers can exploit them.

Breachsense provides flexible integration with virtually any application, SIEM, or browser, making it easy for businesses to implement the service into their existing security toolset.

### If you need visibility into your organization's leaked credentials leaked data, [book a demo](https://www.breachsense.com/book-demo/) to see how Breachsense can help.
