---
date: "2024-04-09"
title: "5 Top Causes of Data Breaches - Data Breach Causes Explained"
image: "images/blog/data-breach-causes.png"
description: "Discover the most common causes of data breaches. Learn what causes a data breach and how data breaches typically occur."
author: "Breachsense"
tags: ["Data Breach", "Cyberattack Trends"]
h1: "5 Most Common Causes of Data Breaches"
intro1: "Are you worried about your company's data being breached? Wondering what are the most common causes of a data breach that you should be preventing?"
intro2: "As someone who collects leaked data for a living, it's clear to me that more data is leaked daily than we can possibly index in a single day. If your organization stores sensitive data, there's a good chance you may experience a data breach at some point. To prevent your company from making headlines, it's crucial to understand the most common types of data breaches and learn how to prevent those from happening."
draft: false
---
## What is a data breach?

A [data breach](https://www.breachsense.com/blog/what-is-a-data-breach/) is a security incident where a threat actor accesses sensitive, protected, or confidential data without authorization. After gaining access to the data, a threat actor may attempt to steal, disclose it, or extort the data owner for financial gain.

Data breaches can include data types, like personal information (e.g., social security numbers), financial data (e.g., credit card numbers), intellectual property, trade secrets, and other sensitive information. It's important to note that both small businesses and enterprises are targets.

Organizations handling sensitive data are responsible for protecting it. The organization is legally held responsible if a threat actor gains unauthorized access to sensitive data. Once a data breach occurs, the repercussions can be severe, including financial loss, damage to reputation, legal consequences, and a loss of public trust. For this reason, organizations invest heavily in cybersecurity to prevent data breaches and to mitigate their impact if and when they occur.

## Data breach vs. data leak

Although the terms "data breach" and "data leak" are often used interchangeably, they have two distinct meanings. Data breaches are often the result of a deliberate attack by cybercriminals who exploit vulnerabilities in their target to gain access to the data.

The method of attack can involve hacking, malware attacks, or social engineering. The critical aspect of a data breach is an active, intentional effort by an unauthorized party to access data.

A data leak, on the other hand, refers to unintentional or accidental exposure of confidential information. Leaks often occur due to internal errors, such as misconfigured databases, unsecured servers, or inadvertent employee actions (like sending sensitive information to the wrong person or leaving documents unsecured).

While cybercriminals can exploit leaked data once exposed, the initial exposure is not usually the result of a targeted attack.

## Five most common causes of data breaches 

### 1. Weak or Stolen Credentials (Passwords)

According to the [Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/2023-data-breach-investigations-report-dbir.pdf), *86*% of breaches involve using stolen credentials. Cybercriminals steal usernames and passwords from sources such as infostealer malware, 3rd party breaches, and social engineering.

Although counter-intuitive, password complexity and forced password rotation aren't effective defenses for leaked passwords. In the case of infostealers, the malware captures the plaintext password before they're encrypted in transit and sends it to the threat actor.

To help protect your accounts, use a password manager and have it generate unique passwords for you. Ensure your system is fully patched and enable Multi-factor Authentication (MFA) wherever available. Infostealers can often bypass standard antivirus solutions, so running periodic system cleaner scans in parallel is essential.

### 2. Malware

Malware is malicious software that can not only steal credentials and session tokens (to bypass MFA) but has complete access to your device. It can steal, encrypt, and delete files and even take screenshots. Malware is a broad term that includes viruses, worms, trojan horses, spyware, keyloggers, rootkits, adware, and ransomware attacks.

A common strain of malware that is very often used to gain initial access is Infostealer malware. The image below shows an example of the directory structure within the stealer logs. The malware collects sensitive data like browser autofills, session cookies, browsing history, and plaintext passwords captured before they're encrypted.

![InfoStealer malware tree](../InfostealerTree.png)

There are several steps you should take to protect your systems against malware. It's essential to keep your antivirus up to date, avoid pirated software, and ensure your software is fully patched. In addition, segmenting your network will help contain the malware in case of a security breach. 

### 3. Software Vulnerabilities

Any significantly complex piece of software will have security vulnerabilities at some point. Security researchers and vendors regularly discover issues and create patches to help mitigate the risk before the vulnerabilities are exploited.

There tends to be a lag between when a vulnerability is discovered and when the software gets patched. On average it takes [an average of 38 days to patch a vulnerability](https://www.darkreading.com/cloud-security/it-takes-an-average-38-days-to-patch-a-vulnerability) This leaves a large window of opportunity for attackers to reverse engineer a security patch, create a working exploit, and find victims who haven't applied the fix yet.

Where applicable, enable any automated patching systems available. Depending on the environment, patches may need testing in a controlled environment before widespread deployment. Conduct regular audits to locate any gaps in the patch management process. Finally, ensure you have backups and a regularly tested recovery plan to restore systems to their pre-patch state if required.

### 4. Third-party Breaches

[Third-party data breaches](https://www.breachsense.com/blog/third-party-data-breach/) happen when sensitive data is stolen from a 3rd party vendor who stores data related to your organization. In many cases, this can be an employee who created an account with the vendor using their work email account.

Many people reuse the same passwords in multiple locations. Password reuse often enables an attacker to use a password leaked on a 3rd party app within your organization.

Require Multi-factor authentication (MFA) to access company resources. MFA mitigates the risk of leaked credentials from 3rd party breaches because a valid username and password are no longer enough to authenticate. In addition, encourage employees to use a password manager to store and generate all their passwords.

### 5. Social Engineering

Social engineering is a tactic cybercriminals use to manipulate their victims into divulging sensitive information that can be used for fraud. Unlike traditional hacking that relies on technical exploits, social engineering exploits human psychology and the tendency to trust.

Human error is often the weakest link when it comes to cybersecurity. Malicious users exploit phishing scams, pretexting, baiting, vishing, and smishing to trick users into performing specific actions or sharing sensitive data.

While security awareness training can be helpful, organizations should implement technical controls that prevent users from being able to make bad decisions.

A classic example of a phishing email from a bank is shown below. While the email looks like an official email from a (fictional) bank, it's essentially trying to trick the recipient into clicking the link and submitting their credentials to a site run by the attacker.

![Phishing example](../phishing.png)

## How to prevent a data breach

- **Integrate Cyber Threat Intelligence (CTI):** Ensure your security team has ongoing visibility into your employees', customers', and software suppliers' leaked credentials and session tokens. Hackers don't need to break in when they can simply log in.
- **Enable Multi-factor authentication:** Implementing MFA makes it significantly harder for attackers to exploit leaked credentials. An attacker must bypass the additional authentication factors to gain access even if a password is compromised.
- **Use a password manager:** A password manager will ensure that strong random passwords are used and help prevent phishing attacks. Users are less likely to enter their credentials into a fraudulent website because the password manager will only autofill them on the right site.
- **Vulnerability assessments:** Companies should regularly map out their infrastructure and assess those systems for vulnerabilities. This testing includes penetration testing, red teaming exercises and secure code reviews (where applicable).
- **Backups:** Having off-site backups is standard practice at this point. Testing those backups and having a recovery plan that can restore servers to previous points in time is critical to prevent downtime in case of an attack.
- **Segment the network:** In the event of a breach, having a properly segmented network will help limit the effects of the attack. By dividing the network into segments, the attack surface is drastically reduced.
- **Encrypt sensitive data:** Encrypt all data at rest and in transit. Encrypting the data ensures that it remains unreadable and secure even if it is intercepted or accessed without authorization.

Understanding how data breaches happen makes you better equipped to prevent them. Breachsense monitors the dark web for the same data that cybercriminals exploit to gain unauthorized access to your organization. Our platform alerts you whenever any relevant data surfaces so that your security team can prevent an attack before criminals use it.

By taking a proactive approach to security, Breachsense empowers you to be one step ahead of cybercriminals. Don't wait until it's too late to secure your data.

[Book a demo](https://www.breachsense.com/book-demo/)
