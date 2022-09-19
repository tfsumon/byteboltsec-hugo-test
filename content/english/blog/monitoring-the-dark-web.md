---
date: "2022-07-17"
title: "Monitoring the Dark Web"
image: "images/blog/darkwebmon.jpg"
author: "josh-amishav"
draft: false
---
Your firewalls, WAFs and IDSes are locked down. Your annual pen testing came out clean. Even your malware defenses are configured properly. One question remains, how are you protecting the front door? Hackers don't need to break in, when they can simply log in. Millions of passwords are leaked online every day. How many of these belong to your organization? 

As great as your coworkers are, they're one of the weakest links in the security chain. The majority of confirmed data breaches leveraged weak, default, or stolen passwords (based on the Verizon Data Breach Investigations Report - DBIR). Detecting your users', employees', and 3rd party suppliers' compromised credentials should be a priority for any security team.

To make matters worse, traditional defenses are becoming less effective. The global trend for hackers is to no longer rely on malware to accomplish their goals. By leveraging an approach called "living off the land" (LOTL), attackers evade legacy antivirus products by using stolen credentials and already built-in tools within their target's network.

### How Does Your Data get on the Dark Web? ###

For the purpose of this post, we'll define the dark web as any part of the internet that is not indexed by search engines. While networks like Tor, I2P or Freenet often come to mind, this definition also includes "regular" internet forums that are only available after a user authenticates. 

Where does the stolen data come from? Cybercriminals sell millions credentials as well as initial access on the dark web every day. We often see one of the following methods as the root cause :

* **Malware.** Infected machines sniff traffic and upload credentials, session tokens, screenshots, and other confidential information to the attacker
* **Vulnerabilities.** Exploits can be found on multiple forums that target specific software versions
* **Phishing.** Legitimate-looking emails impersonate someone with authority that attempts to gain confidential information. 

Once an attacker has valid credentials, they can simply authenticate and go straight through the front door to access your network. Due to password reuse, hackers can use credentials leaked in 3rd party breaches to access your network as well. Furthermore, infostealer malware uploads their victims' session cookies. This allows malicious users to bypass any 2-factor authentication (MFA) requirements by using a valid session token in their requests.

### What Does It Mean If Your Data is On the Dark Web? ###

Businesses risk litigation, regulatory penalties, lost brand reputation, and auditing costs if and when a breach occurs. The risk of hackers gaining their initial access via a credential stuffing attack greatly increases when an organization doesn't have sufficient visibility into their employees' leaked passwords. The same can be said about client credentials used to log into your services which can be exploited to access sensitive data or make unauthorized purchases.

Beyond credentials, company data such as internal documents, emails, employees' government-issued IDs, and client information is often leaked or sold on the dark web as part of double extortion ransomware attacks. The ransomware gang initially encrypts their target's data and demands a ransom. A second ransom is then demanded to not leak or sell the data. Breachsense currently monitors over 100 different [ransomware gangs](https://www.breachsense.io/ransomware-gangs/) to help companies get early notification when their data appears in a breach. Oftentimes, it's not the company itself that's breached but rather one of their software suppliers. When they receive a notification of the breach, they don't have enough details to do anything. Having visibility into the exact details of what was leaked, enables security teams to properly mitigate the threat.

### How Does Dark Web Monitoring Work? ###

Protecting your organization from criminal activities requires vigilance. Regularly monitoring your company's assets on the dark web can help catch problems before they become big enough to cause real damage. Dark web monitoring services scan thousands of resources each day to look for sensitive data. Essentially any information that criminals can use to commit fraud against your organization. This often includes:

* Employee's and customers' usernames and passwords that have been leaked
* Login credentials belonging to your C-level executives' personal accounts
* Credentials for remote access servers such as Remote Desktop, SSH, and FTP
* Internal company emails and documents
* Employees' corporate and government-issued IDs

### How You Can Protect Your Information From the Dark Web ###

Breachsense uses a combination of automated scanning and human analysis to provide continuous monitoring of the dark web for signs of malicious activity. Millions of records are imported daily. Users create a list of domain names, email addresses, or IP addresses that they wish to monitor. When a monitored asset, such as a company email address, appears in a breach or leak, an alert is sent with the exact details of what was disclosed. This often includes the plaintext passwords, which enables security teams to verify the validity of the issue and figure out where else those credentials were used. 

### Benefits of Dark Web Monitoring Tools: ###
* **Threat intelligence.** Data captured can be fed into automated threat intelligence systems as a means to enrich that data
* **Threat hunting.** Threat hunters can use the data to develop a more comprehensive understanding of attackers and the methods used
* **Incident response.** Investigation and response workflows can be used to mitigate threats quickly
* **Integration into security platforms.** Data collected can be integrated into other systems to formulate more accurate insights from the entire security stack.

In addition, offensive security teams, pen testers, red teams, and even M&A consultants can leverage the service to find any historic data associated with their clients that was leaked.

While breached credentials that were part of 3rd party breaches are often mitigated quickly due to vendor notifications, credentials leaked via stealer logs traditionally remain valid for extended periods of time. This increases the likelihood that hackers can exploit these credentials to gain unauthorized access to your organization or commit fraud by impersonating your customers.

### Proactive Monitoring Can Help Reduce Your Risk ###

Setting up ongoing monitoring is a crucial first step to make sure you have visibility when data associated with your organization is breached or leaked. There are a number of other steps that should be taken to help you ensure that your data doesn't end up in the wrong hands.

Password reuse is extremely common. Studies have shown that over 50% of users reuse their passwords across multiple sites. Consider using a password manager like KeePassXC or Bitwarden. Ideally, you should only know the password of your password manager. The password manager should generate your passwords for you. 

In addition, forcing users to periodically change their passwords is no longer recommended (see NIST 800-63-3 and OWASP ASVS). Forced password updates tend to result in very minor changes to the original base password (e.g. Password1 gets changed to Password2). These changes can be easily brute-forced via tools like hashcat.

### Conclusion ###

Cybercriminals aren’t likely to stop any time soon, so it's incredibly important to do everything you possibly can to protect your information. Hackers exploit breached credentials to gain initial access to their victim's networks. By leveraging leaked credentials and already built-in tools, they can avoid detection for long periods of time. Monitoring your organization's assets for breached data helps security teams mitigate one of the primary initial attack vectors attackers use to gain unauthorized access. At [Breachsense](https://www.breachsense.io/), we index millions of breached records daily. We enable security teams to protect their [staff](https://www.breachsense.io/protect-your-staff/) as well as their [customers](https://www.breachsense.io/protect-your-customers/) from data breaches. 
